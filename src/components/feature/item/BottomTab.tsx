'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

import { fetchInsertCartItemById } from '@/api/resource/cart'
import { addToWishList, deleteFromWishList } from '@/api/resource/items'
import { basePath } from '@/api/util/instance'
import { itemIdParam } from '@/app/items/[itemId]/layout'
import CheckModal from '@/components/common/modal/checkModal'
import SelectModal from '@/components/common/modal/selectModal'
import SvgHeart from '@/components/icons/heart'
import { useModalState } from '@/components/provider/modalProvider'
import { Button } from '@/components/ui/button'
import { useCartStore } from '@/store/client/cartSlice'
import { Product } from '@/types/item'

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
  const { add } = useCartStore()
  const router = useRouter()

  const openCheckModal = (content: string) => {
    state.setModal(<CheckModal content={content} />)
    state.modalRef.current?.showModal()
  }

  const openSelectModal = (content: string, onCheck?: () => void, onCancel?: () => void) => {
    state.setModal(<SelectModal content={content} onCheck={onCheck} onCancel={onCancel} />)
    state.modalRef.current?.showModal()
  }

  const handlePushToCart = async () => {
    return router.push(`${basePath}/cart`)
  }

  const handleMoModalWithAddToCart = async () => {
    const msg = await fetchInsertCartItemById(product.id)
    console.log(msg)
    if (!msg.startsWith('장바구니')) {
      return openSelectModal(`이미 장바구니에 추가한 상품입니다.`)
    } else {
      add(product)
      return openSelectModal(`장바구니에 상품을 추가하였습니다. 장바구니로 이동하시겠습니까`, handlePushToCart)
    }
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
    <div className="flex px-5 py-3 gap-5 w-full border-t border-grayscale-100 shadow-inner bg-white h-full">
      <Button
        variant={'outline'}
        size={'icon'}
        className="h-full w-[15%] p-3"
        onClick={async () => handleWish(itemIdParam)}
      >
        <SvgHeart fill={isWished ? 'currentColor' : 'transparent'} width={'1.5rem'} height={'1.5rem'} />
      </Button>
      <Button variant={'primary'} size={'sm'} className="h-full w-4/5" onClick={handleMoModalWithAddToCart}>
        <span className=" text-button-base">구매하기{wished}</span>
      </Button>
    </div>
  )
}
