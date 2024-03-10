import React from 'react'

import { getCart } from '@/api/server/cart'
import { CartStoreProvider } from '@/components/provider/CartStoreProvider'
import ModalProvider from '@/components/provider/modalProvider'

export default async function Provider({ children }: { children: React.ReactNode }) {
  const cart = await getCart()
  return (
    <CartStoreProvider cart={cart}>
      <ModalProvider>{children}</ModalProvider>
    </CartStoreProvider>
  )
}
