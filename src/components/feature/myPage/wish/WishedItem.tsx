'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import { deleteFromWishList, fetchWishList } from '@/api/resource/items'
import CheckModal from '@/components/common/modal/checkModal'
import { useModalState } from '@/components/provider/modalProvider'
import { Button } from '@/components/ui/button'
import { deleteWishParams, WishedItemType } from '@/types/wish'

export default function WishedItem() {
  const [wishList, setWishList] = useState([])

  const state = useModalState()

  useEffect(() => {
    async function getWishList() {
      const res = await fetchWishList()
      console.log(res, 'res!!!')
      setWishList(res.data)
    }
    getWishList()
  }, [state])

  const openCheckModal = (content: string) => {
    state.setModal(<CheckModal content={content} />)
    state.modalRef.current?.showModal()
  }

  async function deleteWish(body: deleteWishParams) {
    const msg = await deleteFromWishList(body)

    openCheckModal(msg)
  }

  console.log('위시리스트으으', wishList)
  return (
    <div className="px-4 py-2 flex flex-col gap-4 h-full">
      <span className=" text-title-sm"> 총 {wishList.length}개</span>
      <div className="h-full flex flex-col gap-4">
        {wishList.map((wishedItem: WishedItemType, index) => (
          <div key={index} className="h-[16%] flex gap-3">
            <div className="h-28 w-[30%] overflow-hidden relative">
              <Image
                alt={wishedItem.itemName}
                // src={wishedItem.promotionImageUrl}
                src={'/images/ricedog.svg'}
                fill
                className=" object-cover"
              />
            </div>
            <div className="flex flex-col justify-between w-full">
              <div className=" text-sm">{wishedItem.itemName}</div>
              <div className="flex gap-1">
                <div className=" text-red-500 font-semibold">{wishedItem.discountRate}%</div>
                <div className=" font-semibold">{wishedItem.itemTotalPrice - wishedItem.saleItemPrice}원</div>
                <div className="relative text-grayscale-200 text-sm">
                  {wishedItem.itemTotalPrice}원
                  <div className="w-full h-px left-0 top-[10px] absolute bg-grayscale-200" />
                </div>
              </div>
              <div className="flex justify-between gap-2 w-full">
                <Button
                  onClick={async () => {
                    deleteWish({ itemId: wishedItem.itemId })
                  }}
                  variant={'ghost'}
                  className="w-full text-black font-normal text-xs"
                >
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
function openCheckModal(msg: any) {
  throw new Error('Function not implemented.')
}
