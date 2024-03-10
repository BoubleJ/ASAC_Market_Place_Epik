'use client'

import { createContext, type ReactNode, useContext, useRef } from 'react'
import { type StoreApi, useStore } from 'zustand'

import { convertCartitemDtosToCartItem } from '@/api/service/cart'
import { type CartStore, createCartStore } from '@/store/client/cartSlice'
import { Cart } from '@/types/product'

export const CartStoreContext = createContext<StoreApi<CartStore> | null>(null)

export interface OrderStoreProviderProps {
  cart: Cart
  children: ReactNode
}

export function CartStoreProvider({ cart, children }: OrderStoreProviderProps) {
  const storeRef = useRef<StoreApi<CartStore>>()
  if (!storeRef.current) {
    const convertedCart = {
      cartId: cart.cartId,
      cart: convertCartitemDtosToCartItem(cart.cartItemDtos),
    }
    storeRef.current = createCartStore(convertedCart)
  }

  return <CartStoreContext.Provider value={storeRef.current}>{children}</CartStoreContext.Provider>
}

export const useCartStore = <T,>(selector: (store: CartStore) => T): T => {
  const cartStoreContext = useContext(CartStoreContext)

  if (!cartStoreContext) {
    throw new Error(`useCartStore must be use within CartStoreProvider`)
  }

  return useStore(cartStoreContext, selector)
}
