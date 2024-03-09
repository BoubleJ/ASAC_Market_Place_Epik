'use client'
import { CheckCircle } from '@/components/icons'

interface IOrderCompleteMessage {
  memberName: string
  orderName: string
}

export default function OrderCompleteMessage({ memberName, orderName }: IOrderCompleteMessage) {
  return (
    <div className="flex flex-col items-center gap-[22px] border-b border-grayscale-50 px-[51px] py-[38px]">
      <CheckCircle width={60} height={60} className={'fill-white stroke-brand-primary-500 text-brand-primary-500'} />
      <div className="flex flex-col items-center gap-[10px]">
        <span className="line-clamp-1 text-body-xl text-grayscale-600">{memberName}님의</span>
        <span className="line-clamp-1 text-body-xl text-grayscale-600">{orderName}</span>
        <span className="line-clamp-1 text-body-xl text-grayscale-600">주문이 완료 되었습니다.</span>
        <span className="line-clamp-1 text-body-2xl text-grayscale-800">내일 아침에 만나요!</span>
      </div>
    </div>
  )
}
