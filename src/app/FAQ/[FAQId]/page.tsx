'use client'

import { useParams } from 'next/navigation'
import React from 'react'

import FAQPage from '@/components/feature/faq/FAQPage'

export default function page() {
  const params = useParams<{ FAQId: string; tag: string; item: string }>()
  const { FAQId } = params

  return (
    <div className="h-full w-full p-4">
      <div className=" text-title-lg">
        <FAQPage FAQId={FAQId} />
      </div>
    </div>
  )
}
