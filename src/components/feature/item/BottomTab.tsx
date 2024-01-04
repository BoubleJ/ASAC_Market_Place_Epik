'use client'
<<<<<<< HEAD

import { fetchInsertCartItemById } from '@/api/resource/cart'
import SelectModal from '@/components/common/modal/selectModal'
=======
import React, { useState } from 'react'

import { addToWishList, deleteFromWishList } from '@/api/resource/items'
import { itemIdParam } from '@/app/items/[itemId]/layout'
import CheckModal from '@/components/common/modal/checkModal'
>>>>>>> 0d67f4ffffa0281f0791772657f8ef5912f8d80e
import SvgHeart from '@/components/icons/heart'
import { useModalState } from '@/components/provider/modalProvider'
import { Button } from '@/components/ui/button'
import { useCartStore } from '@/store/client/cartSlice'
import { Product } from '@/types/item'

<<<<<<< HEAD
interface IBottomTab {
  wished: boolean
  product: Product
}

export default function BottomTab({ wished, product }: IBottomTab) {
  const { add } = useCartStore()
  const state = useModalState()

  const openSelectModal = (content: string, onCheck?: () => void, onCancel?: () => void) => {
    state.setModal(<SelectModal content={content} onCheck={onCheck} onCancel={onCancel} />)
    state.modalRef.current?.showModal()
  }
  const handleAddToCart = async () => {
    const msg = await fetchInsertCartItemById(product.id)
    if (!msg.startWith('장바구니')) {
      return openSelectModal(`${msg}`)
    }
    add(product)
=======
// state 추가하기!
export default function BottomTab({ wished, itemId, loginId }: { wished: boolean; itemId: number; loginId: string }) {
  const itemIdParam = {
    itemId: itemId,
  }
  const state = useModalState()
  const [isWished, setIsWished] = useState(wished)

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
    setIsWished(true)
>>>>>>> 0d67f4ffffa0281f0791772657f8ef5912f8d80e
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
<<<<<<< HEAD
      <Button variant={'primary'} size={'sm'} className="h-full w-4/5" onClick={handleAddToCart}>
        <span className=" text-button-base">구매하기</span>
=======
      <Button variant={'primary'} size={'sm'} className="h-full w-4/5">
        <span className=" text-button-base">구매하기{wished}</span>
>>>>>>> 0d67f4ffffa0281f0791772657f8ef5912f8d80e
      </Button>
    </div>
  )
}
