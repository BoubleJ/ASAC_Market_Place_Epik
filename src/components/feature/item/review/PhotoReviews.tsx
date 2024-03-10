'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function PhotoReviews({ reviews, itemId }: { reviews: any; itemId: number }) {
  const router = useRouter()
  return (
    <div className="grid grid-cols-4 gap-1">
      {reviews.map((review: any) => (
        <button
          className=" relative aspect-square basis-1/4"
          key={review.reviewId}
          onClick={() => router.push(`/items/${itemId}/review?reviewId=${review.reviewId}`)}
        >
          <Image
            alt="Mountains"
            src={review.imageUrls[0].startsWith('Review Image URL') ? `/images/ricedog.svg` : review.imageUrls[0]}
            fill
            sizes="(min-width: 808px) 50vw, 100vw"
            style={{
              objectFit: 'cover',
            }}
          />
        </button>
      ))}
    </div>
  )
}
