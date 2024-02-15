'use client'

import { useRef } from 'react'

import { convertCartitemDtosToCartItem } from '@/api/service/cart'
import { useCartStore } from '@/store/client/cartSlice'
import { CartItemDto } from '@/types/product'

interface ICartStoreInitializer {
  cart: CartItemDto[]
  cartId: number
}

export default function CartStoreInitializer({ cart, cartId }: ICartStoreInitializer) {
  const initializer = useRef(false)
  if (!initializer.current) {
    useCartStore.setState({ cart: convertCartitemDtosToCartItem(cart), cartId })
    initializer.current = true
  }
  return null
}
