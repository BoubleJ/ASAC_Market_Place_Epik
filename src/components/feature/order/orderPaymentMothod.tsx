import React from 'react'

import { Chatbubble } from '@/components/icons'
import { Button } from '@/components/ui/button'

export default function OrderPaymentMothod() {
  return (
    <div className="py-4">
      <div className="mb-[15px]">
        <span className="text-body-base">결제 수단</span>
      </div>
      <div className="flex flex-col gap-[9px]">
        <Button variant={'kakao'} size={'lg'} className="text-grayscale-700 w-full">
          <Chatbubble width={'1rem'} height={'1rem'} />
          카카오페이 결제
        </Button>
        <div className="flex justify-between items-center rounded-md gap-2">
          <Button variant={'ghost'} size={'lg'} className="text-grayscale-700 basis-1/3">
            신용카드
          </Button>
          <Button variant={'ghost'} size={'lg'} className="text-grayscale-700 basis-1/3">
            간편결제
          </Button>
          <Button variant={'ghost'} size={'lg'} className="text-grayscale-700 basis-1/3">
            휴대폰
          </Button>
        </div>
      </div>
    </div>
  )
}
