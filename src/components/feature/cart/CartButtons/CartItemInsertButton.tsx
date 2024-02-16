import { useRouter } from 'next/navigation'
import React from 'react'

import { fetchInsertCartItemById } from '@/api/resource/cart'
import { basePath } from '@/api/util/instance'
import SelectModal from '@/components/common/modal/selectModal'
import { useModalState } from '@/components/provider/modalProvider'
import { Button } from '@/components/ui/button'
import { useCartStore } from '@/store/client/cartSlice'
import { Product } from '@/types/item'

interface ICartItemInsertButton {
  product: Product
}

export default function CartItemInsertButton({ product }: ICartItemInsertButton) {
  const state = useModalState()
  const { add } = useCartStore()
  const router = useRouter()

  const openSelectModal = (content: string, onCheck?: () => void, onCancel?: () => void) => {
    state.setModal(<SelectModal content={content} onCheck={onCheck} onCancel={onCancel} />)
    state.modalRef.current?.showModal()
  }

  const handlePushToCart = async () => {
    return (window.location.href = `${basePath}/cart`)
    // return router.push(`/cart`)
  }

  const handleMoModalWithAddToCart = async () => {
    const msg = await fetchInsertCartItemById(product.id)
    if (!msg.startsWith('장바구니')) {
      return openSelectModal(`${msg}`)
    } else {
      add(product)
      return openSelectModal(`장바구니에 상품을 추가하였습니다. 장바구니로 이동하시겠습니까`, handlePushToCart)
    }
  }

  return (
    <Button variant={'primary'} size={'sm'} className="h-full w-4/5" onClick={handleMoModalWithAddToCart}>
      <span className=" text-button-base">장바구니에 추가</span>
    </Button>
  )
}
