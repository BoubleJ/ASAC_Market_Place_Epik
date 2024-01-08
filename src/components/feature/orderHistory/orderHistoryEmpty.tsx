'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

import { IconWarningTriangleMono } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { useOrderListStore } from '@/store/client/orderListSlice'

export default function OrderHistoryEmpty() {
  const router = useRouter()
  const { duration } = useOrderListStore()
  return (
    <div className={'flex flex-col justify-center items-center pt-[153px] gap-[17px]'}>
      <IconWarningTriangleMono width={'4rem'} height={'4rem'} className={`text-grayscale-100`} />
      <span className="text-gray-300 text-body-md">{duration}간의 주문내역이 없습니다.</span>
      <Button variant={'outline'} onClick={() => router.push('/best-items')}>
        베스트 상품 보기
      </Button>
    </div>
  )
}
