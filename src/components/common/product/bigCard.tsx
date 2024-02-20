import Image from 'next/image'
import React from 'react'
import { BiMessageRoundedDots } from 'react-icons/bi'

import { ShoppingCart } from '@/components/icons'
import { ProductType } from '@/types/product'

interface BigCardProps {
  product: ProductType
}

export default function BigCard({ product }: BigCardProps) {
  return (
    <div className="w-full h-full justify-start items-start gap-1 flex flex-col">
      <div className="relative w-full h-2/3">
        <Image
          // src={product.promotionUrl}
          src={'/images/hotdog.svg'}
          alt={product.name}
          width={300}
          height={300}
          className="w-full h-full object-cover"
        ></Image>
        <div className="w-9 h-9 right-[4%] bottom-[6%] absolute bg-gray-700 bg-opacity-50 text-white rounded-[70px] justify-center items-center flex">
          <ShoppingCart width={'1.25rem'} height={'1.25rem'} />
        </div>
      </div>
      <div className="w-full text-neutral-600 text-sm font-medium ">
        [{product.brand}]{product.name}
      </div>
      <div className="flex gap-1 items-center">
        <div className="text-red-500 text-body-md">{product.discountRate}%</div>
        <div className="text-zinc-800 text-body-md font-semibold">{product.itemPrice}원</div>
        <div className="relative text-grayscale-200 text-sm">
          {product.discountedPrice}원
          <div className="w-full h-px left-0 top-[10px] absolute bg-grayscale-200" />
        </div>
      </div>
      <div className="items-center gap-1 flex text-grayscale-300 text-body-xs font-normal">
        <BiMessageRoundedDots />
        <div>후기 {product.reviewCount}</div>
      </div>
    </div>
  )
}
