import React from 'react'

import ReviewForm from '@/components/feature/addReview/ReviewForm'

export default function AddReviewPage({ searchParams }: { searchParams: { itemId: number; itemName: string } }) {
  return (
    <div className="flex min-h-screen flex-col gap-4 p-4">
      <div className="border-b pb-4 text-title-sm">{searchParams.itemName}</div>
      <div className="text-title-sm">후기쓰기</div>
      <ReviewForm itemId={searchParams.itemId} />
    </div>
  )
}
