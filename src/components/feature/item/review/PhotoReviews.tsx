import Image from 'next/image'
import React from 'react'

export default function PhotoReviews({ reviewImages }: { reviewImages: string[] }) {
  const imagesArray = reviewImages.slice(0, 4)

  return (
    <div className="flex flex-col gap-2 h-full">
      <div className="flex justify-between">
        <span className="text-title-sm">사진 후기</span>
        <button className=" text-body-sm text-grayscale-400 font-normal">전체보기</button>
      </div>
      <div className="h-full flex flex-row gap-1 ">
        {imagesArray.map((image, index) => (
          <div
            key={index}
            className={`relative overflow-hidden aspect-square basis-1/4 ${index === 0 ? 'rounded-l-lg' : ''} ${
              index === imagesArray.length - 1 ? 'rounded-r-lg' : ''
            }`}
          >
            <Image
              alt="review image"
              // src={image}
              src={'/images/ricedog.svg'}
              fill
              style={{
                objectFit: 'cover',
              }}
            />
            {index === imagesArray.length - 1 && (
              <div className=" bg-grayscale-black bg-opacity-30 absolute inset-0 flex items-center justify-center">
                <button className=" text-white text-title-sm font-medium rounded">더보기</button>
              </div>
              // 더보기 이미지 부분 구현 필요
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
