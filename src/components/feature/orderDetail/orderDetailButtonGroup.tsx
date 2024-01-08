import Link from 'next/link'
import React from 'react'

import { Button } from '@/components/ui/button'
import { DeliveryStatus, OrderItem, ShippingStatus } from '@/types/order'

interface IOrderDetailButtonGroup {
  content: OrderItem
  deliveryStatus: DeliveryStatus
}

export default function OrderDetailButtonGroup({ content, deliveryStatus }: IOrderDetailButtonGroup) {
  return (
    <div className="flex justify-start items-center text-body-base text-grayscale-800 gap-3">
      <span className="block line-clamp-1 font-bold">{ShippingStatus[`${deliveryStatus}`]}</span>
      <Button variant={'outline'} className="rounded-none">
        <Link href={`/add-review?itemId${content.itemId}&itemName=${content.itemName}`}>리뷰쓰기</Link>
      </Button>
    </div>
  )
}
