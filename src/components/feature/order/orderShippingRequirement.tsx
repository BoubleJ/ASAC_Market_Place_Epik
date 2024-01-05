import React from 'react'

import { ChevronRight } from '@/components/icons'

export default function OrderShippingRequirement() {
  return (
    <div className="py-4">
      <div className="mb-[15px]">
        <span className="text-body-base">배송 요청사항</span>
      </div>
      <div className="flex items-center text-red-500">
        <span className="text-body-base line-clamp-2">배송요청사항을 입력해주세요</span>
        <ChevronRight width={'1rem'} height={'1rem'} className="fill-transparent" />
      </div>
    </div>
  )
}
