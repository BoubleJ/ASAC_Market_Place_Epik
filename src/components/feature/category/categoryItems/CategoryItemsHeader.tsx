'use client'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React from 'react'

import Header from '@/components/common/header'
import { Bag, ChevronLeft } from '@/components/icons'

export default function CategoryItemsHeader() {
  const params = useSearchParams()
  const router = useRouter()
  const selectedMainCategory = params.get('main')
  return (
    <Header
      left={
        <button onClick={() => router.back()}>
          <ChevronLeft width={'1.5rem'} height={'1.5rem'} fill="transparent" />
        </button>
      }
      center={<span className="text-center">{selectedMainCategory}</span>}
      right={
        <button className="ml-auto">
          <Bag width={'1.5rem'} height={'1.5rem'} fill="transparent" />
        </button>
      }
    />
  )
}
