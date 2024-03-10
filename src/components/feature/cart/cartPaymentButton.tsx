'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

import { useCartStore } from '@/components/provider/CartStoreProvider'
import { Button } from '@/components/ui/button'
import { convertNumberFormat } from '@/lib/utils'

export default function CartPaymentButton() {
  const cart = useCartStore((state) => state.cart)
  const { price } = useCartStore((state) => state.actions)
  const router = useRouter()

  const isEmpty = () => {
    return cart.length === 0 || price() === 0
  }

  const handleCartValidation = () => {
    if (isEmpty()) return
    router.push('/order')
  }

  return (
    <Button variant={'primary'} size={'lg'} onClick={handleCartValidation} disabled={isEmpty()}>
      <span>{isEmpty() ? 0 : convertNumberFormat(price() + 3000)}원 결제하기</span>
    </Button>
  )
}
