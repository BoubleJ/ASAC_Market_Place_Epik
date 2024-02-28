'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function PhotoReviewsPreview({ reviewImages, itemId }: { reviewImages: string[]; itemId: number }) {
  const imagesArray = reviewImages.slice(0, 4)
  const router = useRouter()

  return (
    <div className="flex h-full flex-col gap-2">
      <div className="flex justify-between">
        <span className="text-title-sm">사진 후기</span>
        <button
          className=" text-body-sm font-normal text-grayscale-400"
          onClick={() => router.push(`/items/${itemId}/review`)}
        >
          전체보기
        </button>
      </div>
      <div className="flex h-full flex-row gap-1 ">
        {imagesArray.map((image, index) => (
          <div
            key={index}
            className={`no-scrollbar relative aspect-square basis-1/4 overflow-hidden ${
              index === 0 ? 'rounded-l-lg' : ''
            } ${index === imagesArray.length - 1 ? 'rounded-r-lg' : ''}`}
          >
            <Image
              alt="review image"
              src={image.startsWith('Review Image URL') ? '/images/ricedog.svg' : image}
              // src={'/images/ricedog.svg'}
              fill
              sizes="(min-width: 808px) 50vw, 100vw"
              style={{
                objectFit: 'cover',
              }}
            />
            {index === imagesArray.length - 1 && (
              <div className=" absolute inset-0 flex items-center justify-center bg-grayscale-black bg-opacity-30">
                <button
                  className=" rounded text-title-sm font-medium text-white"
                  onClick={() => router.push(`/items/${itemId}/review`)}
                >
                  더보기
                </button>
              </div>
              // 더보기 이미지 부분 구현 필요
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
