import React from 'react'

import { fetchReviews } from '@/api/resource/items'
import Review from '@/components/feature/item/review/Review'
import { reviewsType } from '@/types/review'

export default async function ReviewList({ itemId }: { itemId: number }) {
  const reviewData = await fetchReviews(itemId)
  const reviews = reviewData.data.reviews
  const reviewCount = reviewData.data.reviewCount
  const itemName = reviewData.data.itemName

  return (
    <div>
      <div className="flex justify-between">
        <span className="text-title-sm">총 {reviewCount} 개</span>
        <button className="text-body-sm text-gray-600">추천순</button>
      </div>
      <div>
        <div className="flex flex-col gap-8 py-5">
          {reviews.map((review: reviewsType, index: number) => (
            <Review key={index} review={review} itemId={itemId} itemName={itemName} />
          ))}
        </div>
      </div>
    </div>
  )
}
