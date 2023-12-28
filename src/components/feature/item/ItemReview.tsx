import React from 'react'

import { fetchReviews } from '@/api/resource/items'
import PhotoReviews from '@/components/feature/item/review/PhotoReviews'
import ReviewList from '@/components/feature/item/review/ReviewList'
import ReviewNotice from '@/components/feature/item/review/ReviewNotice'

export default async function ItemDetailInfo({ itemId }: { itemId: number }) {
  const reviewData = await fetchReviews(itemId)
  const review = reviewData.data

  return (
    <div className="flex flex-col gap-3 p-4">
      <ReviewNotice />
      {/* 추후에 추가 (공지)) */}
      <div className="h-28">
        <PhotoReviews reviewImages={review.imageUrls} />
      </div>
      <div className="border-b-8 my-2 border-b-gray-100"></div>
      <ReviewList itemId={review.itemId} />
    </div>
  )
}
