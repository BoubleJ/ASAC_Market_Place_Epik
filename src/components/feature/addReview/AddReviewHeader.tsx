import { useRouter } from 'next/navigation'
import React from 'react'

import Header from '@/components/common/header'
import { Button } from '@/components/ui/button'
import { CloseIcon } from '@/lib/icons'

export default function AddReviewHeader() {
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
            <CloseIcon size={'1.5rem'} />
          </Button>
        }
        center={<span className="text-center">후기작성</span>}
      />
    </div>
  )
}
