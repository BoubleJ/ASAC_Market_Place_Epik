'use client'

// import { useEffect } from 'react'

import CartItemCard from '@/components/feature/cart/cartItemCard'
import { useCartStore } from '@/components/provider/CartStoreProvider'
import { CartItem } from '@/types/product'

export default function CartItemList() {
  const cart = useCartStore((state) => state.cart)
  console.log(cart)
  // const { cartItemDtos, cartId } = content
  // useEffect(() => {
  //   setCart(cartItemDtos)
  //   setCartId(cartId)
  // }, [cartItemDtos, cartId, setCartId, setCart])

  return (
    <section className="flex w-full flex-col gap-2 px-5 py-[18px]">
      {cart.map((product: CartItem) => (
        <CartItemCard key={product.id} product={product} />
      ))}
    </section>
  )
}
