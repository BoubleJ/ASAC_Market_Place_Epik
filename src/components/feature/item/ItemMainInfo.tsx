import Image from 'next/image'
import React from 'react'

import { fetchItemDetails } from '@/api/resource/items'
import SvgShare from '@/components/icons/share'

export default async function ItemMainInfo({ itemId }: { itemId: number }) {
  const itemData = await fetchItemDetails(itemId)
  const itemDetails = itemData.data
  console.log(itemDetails.data, '!!')

  return (
    <div className="h-screen">
      <div className="w-full h-1/2">
        <Image
          // src={itemDetails.detailImages[0]}
          src={'/images/hotdog.svg'}
          alt="df"
          width={300}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="py-5 px-4 flex flex-col flex-nowrap gap-1">
        <div className="text-body-xs text-grayscale-400">{itemDetails.deliveryMethod}</div>
        <div className="flex justify-between items-center pr-4 gap-10">
          <div className="text-body-md">{itemDetails.itemName}</div>
          <div className="text-body-md">
            <SvgShare width={'1.5rem'} height={'1.5rem'} fill="transparent" />
          </div>
        </div>
        <div className="text-body-xs text-grayscale-400 font-light">{itemDetails.itemInfo}</div>
        <div className="flex gap-1 items-center text-body-lg">
          <div className="text-red-500">{itemDetails.discountRate}%</div>
          <div className="text-zinc-800 font-semibold">
            {(itemDetails.itemPrice * (100 - itemDetails.discountRate)) / 100}원
          </div>
        </div>
        <div className="relative w-14 text-grayscale-200 text-sm">
          <span>{itemDetails.itemPrice}원</span>
          <span className="absolute left-0 top-[10px] w-full bg-grayscale-200" style={{ height: '1px' }} />
        </div>
        <div className=" text-body-mini text-brand-primary-500">{itemDetails.notes}</div>
        {/* {itemDetails.couponId && <div>{itemDetails.coupon.discountType}</div>} */}
        <button className="my-3 border p-2 rounded-md border-brand-primary-500 text-brand-primary-500 text-sm">
          10% 쿠폰 받기
        </button>
        {/* modal  */}
        <div className="py-1 border-b border-gray-200" id="seller"></div>
        <div className="pt-4 grid grid-cols-4 text-body-xs gap-y-1 text-grayscale-400 place-content-start">
          <div className="text-left col-span-1">배송</div>
          <div className=" col-span-3 text-left">{itemDetails.deliveryMethod}</div>
          <div className=" col-span-1 text-left">판매자</div>
          <div className=" col-span-3 text-left">{itemDetails.sellerInfo}</div>
        </div>
      </div>
    </div>
  )
}
