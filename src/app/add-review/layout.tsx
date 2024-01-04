'use client'
import React from 'react'

import AddReviewHeader from '@/components/feature/addReview/AddReviewHeader'

export default function addReviewLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AddReviewHeader />
      <div className="pt-20">{children}</div>
    </>
  )
}
