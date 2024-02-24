'use client'
import { useRouter } from 'next//navigation'
import Image from 'next/image'
import React from 'react'
import { BiMessageRoundedDots } from 'react-icons/bi'

import SvgBag from '@/components/icons/bag'
import { ProductType } from '@/types/product'

interface SmallCardProps {
  product: ProductType
}

export default function SmallCard({ product }: SmallCardProps) {
  const router = useRouter()
  return (
    <div className="h-full w-full justify-start gap-1 flex flex-col">
      <button
        onClick={() => router.push(`/items/${product.id}`)}
        className="h-full w-full justify-start items-start gap-1 flex flex-col"
      >
        <div className="relative w-full h-40">
          <Image
            // src={ decodeURIComponent(product.promotionUrl)}
            src={'/images/hotdog.svg'}
            // src={'/images/default_product_image.svg'}
            alt={product.name}
            width={300}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-col w-full items-start flex text-left">
          <div className="w-full text-neutral-600 text-body-xs font-medium truncate">
            [{product.brand}]{product.name}
          </div>

          <div className="gap-1 inline-flex">
            <div className="text-red-500 text-body-sm">{product.discountRate}%</div>
            <div className="text-zinc-800 text-[13px] font-bold">{product.itemPrice}원</div>
          </div>
          <div className="relative text-grayscale-200 text-xs font-medium">
            {product.discountedPrice}원
            <div className="w-full h-px left-0 top-2 absolute bg-grayscale-200" />
          </div>
        </div>
        <div className="items-center gap-1 flex text-gray-400 text-body-mini font-medium">
          <BiMessageRoundedDots />
          <div>후기 {product.reviewCount}개</div>
        </div>
      </button>
      <button className="border border-grayscale-200 w-full rounded-md text-xs py-1 flex justify-center items-center gap-1 text-gray-500">
        <span>담기</span>
        <SvgBag height={'0.8rem'} width={'0.8rem'} fill="transparent" />
      </button>
    </div>
  )
}
