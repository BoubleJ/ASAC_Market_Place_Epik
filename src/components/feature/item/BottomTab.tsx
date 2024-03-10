'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

import { addToWishList, deleteFromWishList } from '@/api/resource/items'
import { itemIdParam } from '@/app/items/[itemId]/layout'
import CheckModal from '@/components/common/modal/checkModal'
import SvgHeart from '@/components/icons/heart'
import { useModalState } from '@/components/provider/modalProvider'
import { Button } from '@/components/ui/button'
import { Product } from '@/types/item'

import { CartItemInsertButton } from '../cart/CartButtons'

interface IBottomTab {
  wished: boolean
  itemId: number
  product: Product
}

// state 추가하기!
export default function BottomTab({ wished, itemId, product }: IBottomTab) {
  const itemIdParam = {
    itemId: itemId,
  }
  const state = useModalState()
  const [isWished, setIsWished] = useState(wished)
  const router = useRouter()

  const openCheckModal = (content: string) => {
    state.setModal(<CheckModal content={content} />)
    state.modalRef.current?.showModal()
  }

  async function handleWish(body: itemIdParam) {
    let msg = ''
    if (isWished) {
      msg = await deleteFromWishList({ itemId: itemId })
      openCheckModal(msg)
      setIsWished(false)

      return
    }
    msg = await addToWishList(body)
    openCheckModal(msg)
    if (msg !== '사용자를 찾을 수 없습니다. 로그인 해주세요') setIsWished(true)
  }
  return (
    // 찜하기 api, wished 필드 추가되면 찜하기 기능 구현 예정
    <div className="flex h-full w-full gap-5 border-t border-grayscale-100 bg-white px-5 py-3 shadow-inner">
      <Button
        variant={'outline'}
        size={'icon'}
        className="h-full w-[15%] p-3"
        onClick={async () => handleWish(itemIdParam)}
      >
        <SvgHeart fill={isWished ? 'currentColor' : 'transparent'} width={'1.5rem'} height={'1.5rem'} />
      </Button>
      <CartItemInsertButton product={product}>
        <span className=" text-button-base">장바구니에 추가</span>
      </CartItemInsertButton>
    </div>
  )
}
