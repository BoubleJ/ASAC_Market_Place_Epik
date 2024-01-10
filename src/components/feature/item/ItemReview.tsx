'use client'

import { useSearchParams } from 'next/navigation'
import React from 'react'

import PhotoReviews from '@/components/feature/item/review/PhotoReviews'
import ReviewList from '@/components/feature/item/review/ReviewList'
import ReviewNotice from '@/components/feature/item/review/ReviewNotice'

export default function ItemDetailInfo({ itemId, reviewData }: { itemId: number; reviewData: any }) {
  const review = reviewData.data
  const tab = useSearchParams().get('tab')

  return (
    <>
      {tab === 'review' && (
        <div className="flex flex-col gap-3 p-4">
          <ReviewNotice />
          {/* 추후에 추가 (공지)) */}
          <div className="h-28">
            <PhotoReviews reviewImages={review.imageUrls} />
          </div>
          <div className="border-b-8 my-2 border-b-gray-100"></div>
          <ReviewList itemId={review.itemId} />
        </div>
      )}
    </>
  )
}
