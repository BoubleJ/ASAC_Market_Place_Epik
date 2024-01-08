'use client'

import { useRouter } from 'next/navigation'

import Header from '@/components/common/header'
import { IconXMono } from '@/components/icons'

export default function OrderCompleteHeader() {
  const router = useRouter()
  return (
    <Header
      left={
        <IconXMono width={'1.5rem'} height={'1.5rem'} onClick={() => router.push('/cart')} className="fill-white" />
      }
      center={<span className="text-center text-grayscale-800 text-body-lg">주문완료</span>}
    />
  )
}
