'use client'

import { useEffect } from 'react'

import CartItemCard from '@/components/feature/cart/cartItemCard'
import { useCartStore } from '@/store/client/cartSlice'
import { Cart, CartItem } from '@/types/product'

interface ICartItemList {
  content: Cart
}

export default function CartItemList({ content }: ICartItemList) {
  const { cart, setCart, setCartId } = useCartStore()
  const { cartItemDtos, cartId } = content

  useEffect(() => {
    setCart(cartItemDtos)
    setCartId(cartId)
  }, [content, cartItemDtos, cartId, setCartId, setCart])

  return (
    <section className="flex flex-col gap-2 w-full px-5 py-[18px]">
      {cart.map((product: CartItem) => (
        <CartItemCard key={product.id} product={product} />
      ))}
    </section>
  )
}
