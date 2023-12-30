import Image from 'next/image'
import React from 'react'

import { Button } from '@/components/ui/button'

const wishedItems = [
  {
    id: 5,
    name: '애플 4K 스마트폰 004',
    brand: '아마존',
    discountRate: 20,
    discountedPrice: 24086,
    itemPrice: 30107,
    promotionImageUrl: 'http://sales.com/promo/image26.jpg',
    reviewCount: 2,
  },
  {
    id: 79,
    name: '아마존 무선 과학 001',
    brand: 'LG',
    discountRate: 1,
    discountedPrice: 32166,
    itemPrice: 32490,
    promotionImageUrl: 'http://example.com/promo/image19.jpg',
    reviewCount: 3,
  },
  {
    id: 7,
    name: '구글 무선 스마트폰 006',
    brand: '구글',
    discountRate: 13,
    discountedPrice: 64600,
    itemPrice: 74252,
    promotionImageUrl: 'http://sales.com/promo/image93.jpg',
    reviewCount: 2,
  },
  {
    id: 39,
    name: '아마존 고급 청바지 005',
    brand: '샤오미',
    discountRate: 7,
    discountedPrice: 80831,
    itemPrice: 86914,
    promotionImageUrl: 'http://sales.com/promo/image64.jpg',
    reviewCount: 3,
  },
  {
    id: 1,
    name: '아마존 고급 스마트폰 000',
    brand: '구글',
    discountRate: 2,
    discountedPrice: 30478,
    itemPrice: 31099,
    promotionImageUrl: 'http://myshop.com/promo/image45.jpg',
    reviewCount: 3,
  },
  {
    id: 82,
    name: '삼성 무선 과학 004',
    brand: '애플',
    discountRate: 14,
    discountedPrice: 84026,
    itemPrice: 97704,
    promotionImageUrl: 'http://myshop.com/promo/image84.jpg',
    reviewCount: 5,
  },
]

export default function WishedItem() {
  return (
    <div className="px-4 py-2 flex flex-col gap-4">
      <span className=""> 총 {wishedItems.length}개</span>
      <div className="h-screen flex flex-col gap-4">
        {wishedItems.map((wishedItem, index) => (
          <div key={index} className="h-[16%] flex gap-3">
            <div className="h-full w-[30%] overflow-hidden relative">
              <Image
                alt={wishedItem.name}
                // src={wishedItem.promotionImageUrl}
                src={'/images/ricedog.svg'}
                fill
                className=" object-cover"
              />
            </div>
            <div className="flex flex-col justify-between w-full">
              <div className=" text-sm">{wishedItem.name}</div>
              <div className="flex gap-1">
                <div className=" text-red-500 font-semibold">{wishedItem.discountRate}%</div>
                <div className=" font-semibold">{wishedItem.discountedPrice}원</div>
                <div>{wishedItem.itemPrice}</div>
              </div>
              <div className="flex justify-between gap-2 w-full">
                <Button variant={'ghost'} className="w-full text-black font-normal text-xs">
                  삭제
                </Button>
                <Button variant={'outline'} className="w-full font-normal text-xs">
                  담기
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
