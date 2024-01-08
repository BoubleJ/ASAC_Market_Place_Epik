'use client'

import { useOrderStore } from '@/store/client/orderSlice'

export default function OrderCompleteBill() {
  const { orders } = useOrderStore()

  return (
    <section className="flex flex-col items-center w-full px-5 py-[23px] mb-[19px]">
      <div className="flex justify-between w-full mb-3">
        <span className="text-body-md">결제금액</span>
        <div className="space-x-2">
          <span>{orders?.totalAmount}</span>
          <span>원</span>
        </div>
      </div>
    </section>
  )
}
