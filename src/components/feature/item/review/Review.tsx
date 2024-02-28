'use client'
import Image from 'next/image'
import React, { useState } from 'react'

import { fetchHelpfulCount, fetchLessHelpCount } from '@/api/resource/items'
import SvgThumbsUp from '@/components/icons/thumbs-up'
import { reviewsType } from '@/types/review'
import { addhelpfulParams } from '@/types/wish'

export default function Review({
  review,
  itemId,
  itemName,
}: {
  review: reviewsType
  itemId: number
  itemName: string
}) {
  const [helpfulCount, setHelpfulCount] = useState(review.helpful)
  const [isHelpful, setIsHelpful] = useState(false)
  // const [isHelpful, setIsHelpful] = useState(review.checked)
  // api 업데이트 후 적용 (도움돼요 채크 여부)

  const increaseHelpfulCount = async (reviewId: number, isHelpful: boolean, itemId: number) => {
    const body: addhelpfulParams = { itemId: itemId, reviewId: reviewId }
    if (!isHelpful) {
      const a = await fetchHelpfulCount(body)
      setHelpfulCount(helpfulCount + 1)
    } else {
      await fetchLessHelpCount(body)
      setHelpfulCount(helpfulCount + -1)
    }
    setIsHelpful((prevIsHelpful) => !prevIsHelpful)
  }
  // 파라미터 밖에꺼 참조x 외부참조 x 순수함수성 보장 -> ishelpful
  return (
    <div className="flex h-full w-full flex-col gap-3">
      <div className="flex items-center gap-2">
        <span className="rounded-lg border border-brand-primary-500 px-1 text-body-sm font-normal text-brand-primary-500">
          멤버
        </span>
        <span className="text-body-sm font-normal">{review.memberName}</span>
      </div>
      {/* <span className=" text-body-xs font-normal text-grayscale-300">{review.itemName}</span> */}
      {/* <span className="text-body-xs font-normal">{review.imageUrls[0]}</span> */}

      <span className="text-body-xs font-normal text-grayscale-300">{itemName}</span>
      <div className="no-scrollbar relative aspect-square w-1/4 overflow-hidden rounded-lg">
        <Image
          alt="review image"
          // src={'image'}

          src={review.imageUrls[0].startsWith('Review Image URL') ? '/images/ricedog.svg' : review.imageUrls[0]}
          fill
          sizes="50vw, 100vw"
          className=" object-cover"
        />
      </div>
      <div className=" text-body-base font-normal">{review.comment}</div>
      <div className="flex items-end justify-between">
        <span className="text-body-xs font-normal text-grayscale-300">{review.reviewWriteDate}</span>

        <button
          onClick={async () => {
            increaseHelpfulCount(review.reviewId, isHelpful, itemId)
          }}
          className={`${
            isHelpful ? 'text-green-400' : 'text-grayscale-400'
          } flex items-center gap-2 rounded-full border px-2 py-1 text-sm font-light text-grayscale-400`}
        >
          <SvgThumbsUp width={'1.3rem'} height={'1.3rem'} fill="currentColor" />
          <span className="">도움돼요</span>
          {/* <span>{review.helpful}</span> */}
          <span>{helpfulCount}</span>
        </button>
      </div>
      <div className="border-b border-b-grayscale-100 pt-3"></div>
    </div>
  )
}
