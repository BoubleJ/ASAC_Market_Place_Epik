import Link from 'next/link'

import { convertNumberFormat } from '@/lib/utils'
import { OrderItem } from '@/types/order'

interface IOrderDetailItem {
  content: OrderItem
}
export default function OrderDetailItem({ content }: IOrderDetailItem) {
  const unDiscountPrice = content.itemPrice * content.itemCount
  const discountPrice = Math.floor(content.itemPrice * (content.discountRate / 100)) * content.itemCount
  const finalDiscountedPrice = unDiscountPrice - discountPrice
  return (
    <div className="flex flex-col gap-2">
      <Link
        href={`/item/${content.itemId}`}
        className="text-grayscale-800 text-body-base font-bold cursor-pointer hover:text-brand-primary-500"
      >
        {content.itemName}
      </Link>
      <div className="flex">
        <div className="mr-2 text-body-base font-bold">
          <span>{convertNumberFormat(finalDiscountedPrice)}</span>
          <span>원</span>
        </div>
        <div className="flex gap-3 justify-start items-center">
          <div className="font-medium text-grayscale-400 line-through text-body-xs">
            <span>{convertNumberFormat(unDiscountPrice)}</span>
            <span>원</span>
          </div>
          <div className="bg-grayscale-100 w-[2px] h-[14px]" />
          <span className="font-medium text-body-base">{content.itemCount}개</span>
        </div>
      </div>
    </div>
  )
}
