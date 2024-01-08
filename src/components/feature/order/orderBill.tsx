import React from 'react'

import { convertNumberFormat } from '@/lib/utils'
import { useOrderStore } from '@/store/client/orderSlice'
import { IOrder } from '@/types/order'

export default function OrderBill() {
  const { amount, totalAmount, salesTotalAmount } = useOrderStore.getState().orders as IOrder
  const deliveryCharge = 3000
  return (
    <section className="flex flex-col items-center gap-4 w-full px-5 py-[18px] py-[30px]">
      <div className="flex justify-between text-body-md w-full">
        <span>상품금액</span>
        <div className="space-x-2">
          <span>{amount}</span>
          <span>원</span>
        </div>
      </div>
      <div className="flex justify-between text-body-md w-full">
        <span>상품할인금액</span>
        <div className="space-x-2">
          <span>{salesTotalAmount}</span>
          <span>원</span>
        </div>
      </div>
      <div className="flex justify-between text-body-md w-full">
        <span>배송비</span>
        <div className="space-x-2">
          <span>+{deliveryCharge}</span>
          <span>원</span>
        </div>
      </div>
      <div className="w-11/12 h-px bg-gray-100" />
      <div className="flex justify-between w-full mb-6">
        <span className="text-body-md">결제예정금액</span>
        <div className="space-x-2">
          {/* {paymentScheduledItems.length ? (
            <span className="text-body-xl">{convertNumberFormat(price() + deliveryCharge)}</span>
            ) : (
              <span className="text-body-xl">0</span>
            )} */}
          <span className="text-body-xl">{convertNumberFormat(totalAmount + deliveryCharge)}</span>
          <span>원</span>
        </div>
      </div>
    </section>
  )
}
