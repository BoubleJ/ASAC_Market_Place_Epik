'use client'
import { useRouter } from 'next//navigation'
import Image from 'next/image'
import React from 'react'
import { BiMessageRoundedDots } from 'react-icons/bi'

import { ShoppingCart } from '@/components/icons'
import { ProductType } from '@/types/product'

interface SmallCardProps {
  product: ProductType
}

export default function SmallCard({ product }: SmallCardProps) {
  const router = useRouter()
  return (
    <button
      onClick={() => router.push(`/items/${product.id}`)}
      className="h-full w-full justify-start items-start gap-1 flex flex-col"
    >
      <div className="relative w-full h-4/6">
        <Image
          // src={product.promotionUrl}
          src={'/images/hotdog.svg'}
          alt={product.name}
          width={300}
          height={300}
          className="w-full h-full object-cover"
        />
        <div className="w-8 h-8 right-[6%] bottom-[6%] absolute bg-gray-700 bg-opacity-50 text-white rounded-[70px] justify-center items-center flex">
          <ShoppingCart width={'1.125rem'} height={'1.125rem'} />
        </div>
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
  )
}
