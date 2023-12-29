'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

import Header from '@/components/common/header'
import { ChevronLeft } from '@/components/icons'

export default function WishHeader() {
  const router = useRouter()
  return (
    <Header
      left={<ChevronLeft width={'1.5rem'} height={'1.5rem'} fill="transparent" onClick={() => router.back()} />}
      center={<span className="text-center">찜한 상품</span>}
    />
  )
}
