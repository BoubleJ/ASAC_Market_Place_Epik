import React from 'react'

import { fetchReviews } from '@/api/resource/items'
import PhotoReviews from '@/components/feature/item/review/PhotoReviews'
import ReviewDetail from '@/components/feature/item/review/ReviewDetail'

export default async function page({
  params,
  searchParams,
}: {
  params: { itemId: number }
  searchParams: { reviewId: number | null }
}) {
  const reviewData = await fetchReviews(params.itemId)
  const reviews = reviewData.data.reviews

  function findReviewById(reviews: any, selectedReviewId: number | null) {
    const selectedReview = reviews.find((review: any) => review.reviewId === Number(selectedReviewId))
    return selectedReview
  }

  return (
    <div className="p-2 pb-12">
      {searchParams.reviewId ? (
        <ReviewDetail review={findReviewById(reviews, searchParams.reviewId)} />
      ) : (
        <PhotoReviews reviews={reviews} itemId={params.itemId} />
      )}
    </div>
  )
}
