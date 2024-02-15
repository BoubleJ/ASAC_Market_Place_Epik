'use client'

import { Button } from '@/components/ui/button'
import { convertNumberFormat } from '@/lib/utils'
import { useOrderStore } from '@/store/client/orderSlice'
import { DELIVERY_CHARGE } from '@/types/payment'

export default function OrderPaymentButton() {
  const { orders, isEmpty } = useOrderStore()
  const isEmptyOrder: boolean = isEmpty()

  return (
    <section className="flex justify-center items-center">
      <Button type="submit" variant={'primary'} size={'lg'} disabled={isEmptyOrder}>
        <span>{convertNumberFormat(orders?.totalAmount! + DELIVERY_CHARGE)}원 결제하기</span>
      </Button>
    </section>
  )
}
