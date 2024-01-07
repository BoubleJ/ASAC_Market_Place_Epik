'use client'
import { CheckCircle } from '@/components/icons'
import { useOrderStore } from '@/store/client/orderSlice'

export default function OrderCompleteMessage() {
  const { orders } = useOrderStore()

  return (
    <div className="flex flex-col gap-[22px] py-[38px] px-[51px] border-b border-grayscale-50 items-center">
      <CheckCircle width={60} height={60} className={'fill-white text-brand-primary-500 stroke-brand-primary-500'} />
      <div className="flex flex-col gap-[1opx] items-center">
        <span className="text-body-xl text-grayscale-600">{orders?.memberName}님의 주문이 완료 되었습니다.</span>
        <span className="text-body-2xl text-grayscale-800">내일 아침에 만나요!</span>
      </div>
    </div>
  )
}
