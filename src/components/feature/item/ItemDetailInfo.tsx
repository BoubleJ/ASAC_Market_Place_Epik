import Image from 'next/image'
import React from 'react'

export default function ItemReview({ tabParam, itemData }: { tabParam: string | null; itemData: any }) {
  const itemDetails = itemData.data

  return (
    <>
      {tabParam === 'detail' && (
        <div className=" flex flex-col px-4">
          <div className="pt-4 text-body-md font-semibold">상품정보</div>

          <div className="grid grid-cols-4 place-content-start gap-y-3 pt-4 text-body-xs text-grayscale-400">
            <div className="col-span-1 text-left">배송</div>
            <div className=" col-span-3 text-left font-normal text-gray-600">{itemDetails.deliveryMethod}</div>
            <div className=" col-span-1 text-left">판매자</div>
            <div className=" col-span-3 text-left font-normal text-gray-600">{itemDetails.sellerInfo}</div>
          </div>
          <div
            className="pt-10"
            style={{
              display: 'grid',
              gridGap: '8px',
              gridTemplateColumns: 'repeat(auto-fit, minmax(40%, auto))',
            }}
            // 커스터마이즈로 빼기
          >
            {itemDetails.detailImages.map((image: string) => (
              <div key={image} style={{ position: 'relative', height: '200px' }}>
                <Image
                  alt={`${itemDetails.itemName} 이미지`}
                  src={'/images/hotdog.svg'}
                  // src={image}
                  fill
                  sizes="(min-width: 808px) 50vw, 100vw"
                  style={{
                    objectFit: 'cover', // cover, contain, none
                  }}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-5 pt-7 text-body-sm">
            <span className=" text-purple-900">{itemDetails.itemName} 한눈에 보기 </span>
            <div className="flex flex-col text-grayscale-500">
              <span className=" ">타입</span>
              <span className="pt-1 font-normal">- {itemDetails.itemInfo} </span>
            </div>
            <div className="flex flex-col text-grayscale-500">
              <span className=" ">성분</span>
              <span className="pt-1 font-normal">- {itemDetails.description}</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
