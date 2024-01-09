'use client'

import { useRouter } from 'next/navigation'

import Header from '@/components/common/header'
import { ChevronLeft } from '@/components/icons'

export default function OrderHistoryHeader() {
  const router = useRouter()
  return (
    <Header
      left={
        <ChevronLeft width={'1.5rem'} height={'1.5rem'} onClick={() => router.push('/myPage')} className="fill-transparent" />
      }
      center={<span className="text-center text-grayscale-800 text-body-lg">주문내역</span>}
    />
  )
}
