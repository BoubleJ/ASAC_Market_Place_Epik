'use client'

import { useOrderStore } from '@/components/provider/OrderStoreProvider'
import { Button } from '@/components/ui/button'
import { convertNumberFormat } from '@/lib/utils'
import { DELIVERY_CHARGE } from '@/types/payment'

export default function OrderPaymentButton() {
  const orders = useOrderStore((state) => state.orders)
  const isEmpty = useOrderStore((state) => state.isEmpty)

  return (
    <section className="flex items-center justify-center">
      <Button type="submit" variant={'primary'} size={'lg'} disabled={isEmpty()}>
        <span>{convertNumberFormat(orders?.totalAmount! + DELIVERY_CHARGE)}원 결제하기</span>
      </Button>
    </section>
  )
}
