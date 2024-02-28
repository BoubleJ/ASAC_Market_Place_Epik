import React from 'react'

import PhotoReviewsPreview from '@/components/feature/item/review/PhotoReviewsPreview'
import ReviewList from '@/components/feature/item/review/ReviewList'
import ReviewNotice from '@/components/feature/item/review/ReviewNotice'

export default function ItemDetailInfo({
  itemId,
  tabParam,
  reviewData,
}: {
  itemId: number
  tabParam: string | null
  reviewData: any
}) {
  const review = reviewData.data

  return (
    <>
      {tabParam === 'review' && (
        <div className="flex flex-col gap-3 p-4">
          <ReviewNotice />
          {/* 추후에 추가 (공지)) */}
          <div className="h-28">
            <PhotoReviewsPreview reviewImages={review.imageUrls} itemId={itemId} />
          </div>
          <div className="my-2 border-b-8 border-b-gray-100"></div>
          <ReviewList itemId={review.itemId} />
        </div>
      )}
    </>
  )
}
