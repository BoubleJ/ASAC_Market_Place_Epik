'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

import Header from '@/components/common/header'
import { ChevronLeft } from '@/components/icons'
import { Button } from '@/components/ui/button'

export default function EditInfoHeader() {
  const router = useRouter()
  return (
    <div className="fixed w-96 top-0 z-10 bg-white h-20">
      <Header
        left={
          <Button
            size={'icon'}
            onClick={() => router.back()}
            className="bg-transparent text-grayscale-900 hover:bg-transparent border-0 ring-0 shadow-none"
          >
            <ChevronLeft widths={'1.5rem'} height={'1.5rem'} fill="transparent" />
          </Button>
        }
        center={<span className="text-center">개인정보 수정</span>}
      />
    </div>
  )
}
