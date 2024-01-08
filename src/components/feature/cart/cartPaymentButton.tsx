'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

import { Button } from '@/components/ui/button'
import { convertNumberFormat } from '@/lib/utils'
import { useCartStore } from '@/store/client/cartSlice'

export default function CartPaymentButton() {
  const { price, cart } = useCartStore()
  const router = useRouter()

  const isEmpty = () => {
    return cart.length === 0 || price() !== 0
  }

  const handleCartValidation = () => {
    if (isEmpty()) return
    router.push('/order')
  }

  return (
    <Button variant={'primary'} size={'lg'} onClick={handleCartValidation} disabled={isEmpty()}>
      <span>{convertNumberFormat(price())}원 결제하기</span>
    </Button>
  )
}
