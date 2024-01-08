'use client'

import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'

export default function OrderCompleteNavButton() {
  const router = useRouter()
  return (
    <div className="flex gap-[10px]">
      <Button variant={'ghost'} size={'lg'} onClick={() => router.push(`/order-history`)} className="text-grayscale-700">
        주문 상세보기
      </Button>
      <Button variant={'primary'} size={'lg'} onClick={() => router.push('/recommendations')} className="">
        쇼핑 계속하기
      </Button>
    </div>
  )
}
