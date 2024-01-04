'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

import Header from '@/components/common/header'
import { Bag, ChevronLeft } from '@/components/icons'

export default function CategoryItemsHeader({ mainCategory }: { mainCategory: string }) {
  const router = useRouter()
  return (
    <Header
      left={
        <button onClick={() => router.back()}>
          <ChevronLeft width={'1.5rem'} height={'1.5rem'} fill="transparent" />
        </button>
      }
      center={<span className="text-center">{mainCategory}</span>}
      right={
        <button className="ml-auto">
          <Bag width={'1.5rem'} height={'1.5rem'} fill="transparent" />
        </button>
      }
    />
  )
}
