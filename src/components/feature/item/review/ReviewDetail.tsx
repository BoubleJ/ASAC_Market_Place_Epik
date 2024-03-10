import Image from 'next/image'
import React from 'react'

import SvgThumbsUp from '@/components/icons/thumbs-up'

export default function ReviewDetail({ review }: { review: any }) {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <div className=" relative aspect-square basis-1/4" key={review.reviewId}>
          <Image
            alt="Mountains"
            src={review.imageUrls[0].startsWith('Review Image URL') ? `/images/ricedog.svg` : review.imageUrls[0]}
            fill
            sizes="(min-width: 808px) 50vw, 100vw"
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-lg border border-brand-primary-500 px-1 text-body-sm font-normal text-brand-primary-500">
            멤버
          </span>
          <span className="text-body-sm font-normal">{review.memberName}</span>
        </div>
        <div className=" text-body-base font-normal">{review.comment}</div>
        <div className="flex items-end justify-between">
          <span className="text-body-xs font-normal text-grayscale-300">{review.reviewWriteDate}</span>

          <button
            // onClick={async () => {
            //   increaseHelpfulCount(review.reviewId, isHelpful, itemId)
            // }}
            className={`${'text-grayscale-400'} flex items-center gap-2 rounded-full border px-2 py-1 text-sm font-light text-grayscale-400`}
          >
            <SvgThumbsUp width={'1.3rem'} height={'1.3rem'} fill="currentColor" />
            <span className="">도움돼요</span>
            {/* <span>{review.helpful}</span> */}
            <span>{review.helpful}</span>
          </button>
        </div>{' '}
      </div>
    </div>
  )
}
