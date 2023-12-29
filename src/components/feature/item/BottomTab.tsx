'use client'
import React from 'react'

import { commonHeader } from '@/api/util/instance'
import { itemIdParam } from '@/app/items/[itemId]/layout'
import CheckModal from '@/components/common/modal/checkModal'
import SvgHeart from '@/components/icons/heart'
import { useModalState } from '@/components/provider/modalProvider'
import { Button } from '@/components/ui/button'

export default function BottomTab({ wished, itemId }: { wished: boolean; itemId: number }) {
  const itemIdParam = {
    itemId: itemId,
  }
  const state = useModalState()

  const openCheckModal = (content: string) => {
    state.setModal(<CheckModal content={content} />)
    state.modalRef.current?.showModal()
  }

  async function handleWish(body: itemIdParam) {
    const res = await fetch('http://localhost:3000/api/items/wish', {
      method: 'POST',
      headers: commonHeader,
      body: JSON.stringify(body),
    })
    const state = await res.json()
    console.log(state.msg, 'ㅎㅂㅎ')
    console.log('ㅎㅂㅎ')

    openCheckModal(state.msg)
  }
  return (
    // 찜하기 api, wished 필드 추가되면 찜하기 기능 구현 예정
    <div className="flex px-5 py-3 gap-5 w-full border-t border-grayscale-100 shadow-inner bg-white h-full">
      <Button
        variant={'outline'}
        size={'icon'}
        className="h-full w-[15%] p-3"
        onClick={async () => handleWish(itemIdParam)}
      >
        <SvgHeart fill={wished ? 'currentColor' : 'transparent'} width={'1.5rem'} height={'1.5rem'} />
      </Button>
      <Button variant={'primary'} size={'sm'} className="h-full w-4/5">
        <span className=" text-button-base">구매하기</span>
      </Button>
    </div>
  )
}
