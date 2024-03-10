'use client'
import { useRouter } from 'next//navigation'
import Image from 'next/image'
import React from 'react'
import { BiMessageRoundedDots } from 'react-icons/bi'

import { convertProductToProductType } from '@/api/service/item'
import { CartItemInsertButton } from '@/components/feature/cart/CartButtons'
import { ShoppingCart } from '@/components/icons'
import { ProductType } from '@/types/product'

interface SmallCardProps {
  product: ProductType
}

export default function SmallCard({ product }: SmallCardProps) {
  const router = useRouter()
  return (
    <div className="flex h-full w-full flex-col justify-start gap-1">
      <button
        onClick={() => router.push(`/items/${product.id}`)}
        className="flex h-full w-full flex-col items-start justify-start gap-1"
      >
        <div className="relative h-48 w-full">
          <Image
            // src={ decodeURIComponent(product.promotionUrl)}
            src={'/images/hotdog.svg'}
            // src={'/images/default_product_image.svg'}
            alt={product.name}
            width={300}
            height={300}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex w-full flex-col items-start text-left">
          <div className="w-full truncate text-body-xs font-medium text-neutral-600">
            [{product.brand}]{product.name}
          </div>

          <div className="inline-flex gap-1">
            <div className="text-body-sm text-red-500">{product.discountRate}%</div>
            <div className="text-[13px] font-bold text-zinc-800">{product.itemPrice}원</div>
          </div>
          <div className="relative text-xs font-medium text-grayscale-200">
            {product.discountedPrice}원
            <div className="absolute left-0 top-2 h-px w-full bg-grayscale-200" />
          </div>
        </div>
        <div className="flex items-center gap-1 text-body-mini font-medium text-gray-400">
          <BiMessageRoundedDots />
          <div>후기 {product.reviewCount}개</div>
        </div>
      </button>
      <CartItemInsertButton
        variant={'none'}
        product={convertProductToProductType(product)}
        className="flex w-full items-center justify-center gap-1 rounded-md border border-grayscale-200 bg-transparent py-1 text-xs text-gray-500"
      >
        <span>담기</span>
        <ShoppingCart height={'0.8rem'} width={'0.8rem'} fill="transparent" />
      </CartItemInsertButton>
    </div>
  )
}
