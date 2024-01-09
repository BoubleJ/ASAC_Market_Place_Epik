import Link from 'next/link'
import React from 'react'

import { ChevronRight } from '@/components/icons'
import { convertStringToDateFormat } from '@/lib/utils'
import { IOrderListItem } from '@/types/order'

interface IOrderHistoryItem {
  content: IOrderListItem
}

export default function OrderHistoryItem({ content }: IOrderHistoryItem) {
  return (
    <section className="flex flex-col gap-[18px] pt-[22px] pb-[25px] ">
      <div className={'flex justify-start items-center'}>
        <span className="text-body-md">{convertStringToDateFormat(content.orderDateTime)}</span>
        <Link href={`/order-detail/${content.orderId}`} className={'ml-auto flex items-center'}>
          <span className="text-body-xs font-medium">주문상세</span>
          <ChevronRight width={14} height={14} className="fill-transparent" />
        </Link>
      </div>
      <div className="bg-grayscale-50 w-full h-[2px]" />
      <div className="flex gap-[23px]">
        <div className="space-y-3 text-grayscale-600 font-medium text-body-base">
          <span className="block line-clamp-1">상품명</span>
          <span className="block line-clamp-1">주문번호</span>
          <span className="block line-clamp-1">결제방법</span>
          <span className="block line-clamp-1">결제금액</span>
        </div>
        <div className="space-y-3 text-grayscale-800 font-medium text-body-base">
          <span className="block line-clamp-1">{content.itemName}</span>
          <span className="block line-clamp-1">{content.orderId}</span>
          <span className="block line-clamp-1">{content.paymentMethod}</span>
          <span className="block line-clamp-1">{content.totalAmount}</span>
        </div>
      </div>
    </section>
  )
}
