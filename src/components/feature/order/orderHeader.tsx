'use client'

import { useRouter } from 'next/navigation'

import Header from '@/components/common/header'
import { ChevronLeft } from '@/components/icons'

export default function OrderHeader() {
  const router = useRouter()
  return (
    <Header
      left={<ChevronLeft width={'1.5rem'} height={'1.5rem'} onClick={() => router.back()} className="fill-white" />}
      center={<span className="text-center text-grayscale-800 text-body-lg">주문서</span>}
    />
  )
}
