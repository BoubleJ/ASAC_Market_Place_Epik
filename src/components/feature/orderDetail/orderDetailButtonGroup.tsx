import Link from 'next/link'
import React from 'react'

import { Button } from '@/components/ui/button'
import { DeliveryStatus, ShippingStatus } from '@/types/order'

interface IOrderDetailButtonGroup {
  deliveryStatus: DeliveryStatus
}

export default function OrderDetailButtonGroup({ deliveryStatus }: IOrderDetailButtonGroup) {
  return (
    <div className="flex justify-start items-center text-body-base text-grayscale-800 gap-3">
      <span className="block line-clamp-1 font-bold">{ShippingStatus[`${deliveryStatus}`]}</span>
      <Button variant={'outline'} className="rounded-none">
        <Link href={`/add-review`}>리뷰쓰기</Link>
      </Button>
    </div>
  )
}
