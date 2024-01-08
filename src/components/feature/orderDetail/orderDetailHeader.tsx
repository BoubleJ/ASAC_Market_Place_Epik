'use client'

import { useRouter } from 'next/navigation'

import Header from '@/components/common/header'
import { ChevronLeft } from '@/components/icons'

export default function OrderDetailHeader() {
  const router = useRouter()
  return (
    <Header
      left={
        <ChevronLeft width={'1.5rem'} height={'1.5rem'} onClick={() => router.back()} className="fill-transparent" />
      }
      center={<span className="text-center text-grayscale-800 text-body-lg">주문 내역 상세</span>}
    />
  )
}
