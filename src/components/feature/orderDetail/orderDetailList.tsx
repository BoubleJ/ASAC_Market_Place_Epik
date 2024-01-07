import React from 'react'

import OrderDetailItem from '@/components/feature/orderDetail/orderDetailItem'
import { convertStringToDateFormat } from '@/lib/utils'
import { DeliveryStatus, OrderItem } from '@/types/order'

import OrderDetailButtonGroup from './orderDetailButtonGroup'

interface IOrderDetailList {
  orderId: number
  orderDetailItems: OrderItem[]
  deliveryStatus: DeliveryStatus
  orderDateTime: string
}

export default function OrderDetailList({
  orderId,
  orderDetailItems,
  deliveryStatus,
  orderDateTime,
}: IOrderDetailList) {
  return (
    <section className="flex flex-col gap-3 justify-center items-start py-3">
      <div className="text-body-md font-semibold flex gap-2 justify-start items-center w-full">
        <span>주문번호</span>
        <span>{orderId}</span>
        <span className="ml-auto">{convertStringToDateFormat(orderDateTime)}</span>
      </div>
      <div className="bg-grayscale-400 w-full h-[1px]" />
      <div className="divide-y-2 divide-gray-50 w-full">
        {orderDetailItems.map((item) => (
          <div key={item.itemId} className="flex justify-between w-full py-4">
            <OrderDetailItem content={item} />
            <OrderDetailButtonGroup deliveryStatus={deliveryStatus} />
          </div>
        ))}
      </div>
    </section>
  )
}
