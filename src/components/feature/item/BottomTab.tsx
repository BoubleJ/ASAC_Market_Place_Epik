'use client'
import React from 'react'

import { addWish } from '@/api/resource/items'
import SvgHeart from '@/components/icons/heart'
import { Button } from '@/components/ui/button'

export default function BottomTab({ wished, itemId }: { wished: boolean; itemId: number }) {
  const handleWish = async () => {
    const res = await addWish(itemId)
    console.log('added')
    console.log(await res.text())
  }

  return (
    // 찜하기 api, wished 필드 추가되면 찜하기 기능 구현 예정
    <div className="flex px-5 py-3 gap-5 w-full border-t border-grayscale-100 shadow-inner bg-white h-full">
      <Button variant={'outline'} size={'icon'} className="h-full w-[15%] p-3" onClick={handleWish}>
        <SvgHeart fill={wished ? 'currentColor' : 'transparent'} width={'1.5rem'} height={'1.5rem'} />
      </Button>
      <Button variant={'primary'} size={'sm'} className="h-full w-4/5">
        <span className=" text-button-base">구매하기</span>
      </Button>
    </div>
  )
}
