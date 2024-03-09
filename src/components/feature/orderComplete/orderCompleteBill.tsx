'use client'

import { convertNumberFormat } from '@/lib/utils'

interface IOrderCompleteBill {
  totalAmount: string
}

export default function OrderCompleteBill({ totalAmount }: IOrderCompleteBill) {
  return (
    <section className="mb-[19px] flex w-full flex-col items-center px-5 py-[23px]">
      <div className="mb-3 flex w-full items-center justify-between">
        <span className="text-body-xl">결제금액</span>
        <div className="flex items-center space-x-2">
          <span className="text-body-xl">{convertNumberFormat(parseInt(totalAmount))}</span>
          <span className="text-body-xl">원</span>
        </div>
      </div>
    </section>
  )
}
