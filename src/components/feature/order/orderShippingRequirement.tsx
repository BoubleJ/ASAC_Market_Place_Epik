'use client'

import OrderContainer from '@/components/feature/order/orderContainer'
import { ChevronRight } from '@/components/icons'

export default function OrderShippingRequirement() {
  return (
    <OrderContainer>
      <div className="mb-[15px]">
        <span className="text-body-base">배송 요청사항</span>
      </div>
      <div className="flex items-center text-red-500">
        <span className="line-clamp-2 text-body-base">배송요청사항을 입력해주세요</span>
        <ChevronRight width={'1rem'} height={'1rem'} className="fill-transparent" />
      </div>
    </OrderContainer>
  )
}
