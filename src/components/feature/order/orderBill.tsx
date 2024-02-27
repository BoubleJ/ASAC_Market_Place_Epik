'use client'

import React from 'react'

import OrderContainer from '@/components/feature/order/orderContainer'
import { useOrderStore } from '@/components/provider/OrderStoreProvider'
import { convertNumberFormat } from '@/lib/utils'
import { DELIVERY_CHARGE } from '@/types/payment'

function OrderBill() {
  const { totalAmount, salesTotalAmount } = useOrderStore((state) => state.orders)

  return (
    <OrderContainer className="py-0 pb-[30px] pt-[18px]">
      <div className="flex flex-col items-center gap-4">
        <div className="flex w-full justify-between text-body-md">
          <span>상품금액</span>
          <div className="space-x-2">
            <span>{totalAmount}</span>
            <span>원</span>
          </div>
        </div>
        <div className="flex w-full justify-between text-body-md">
          <span>상품할인금액</span>
          <div className="space-x-2">
            <span>{salesTotalAmount}</span>
            <span>원</span>
          </div>
        </div>
        <div className="flex w-full justify-between text-body-md">
          <span>배송비</span>
          <div className="space-x-2">
            {totalAmount !== 0 ? <span>+{DELIVERY_CHARGE}</span> : <span className="text-body-md">0</span>}
            <span>원</span>
          </div>
        </div>
        <div className="h-px w-11/12 bg-gray-100" />
        <div className="mb-6 flex w-full justify-between">
          <span className="text-body-md">결제예정금액</span>
          <div className="space-x-2">
            {totalAmount !== 0 ? (
              <span className="text-body-xl">{convertNumberFormat(totalAmount + DELIVERY_CHARGE)}</span>
            ) : (
              <span className="text-body-xl">0</span>
            )}
            {/* <span className="text-body-xl">{convertNumberFormat(totalAmount + DELIVERY_CHARGE)}</span> */}
            <span>원</span>
          </div>
        </div>
      </div>
    </OrderContainer>
  )
}

export default React.memo(OrderBill)
