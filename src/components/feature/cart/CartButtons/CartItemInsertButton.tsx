import { useRouter } from 'next/navigation'
import React from 'react'

import { fetchInsertCartItemById } from '@/api/resource/cart'
import { basePath } from '@/api/util/instance'
import SelectModal from '@/components/common/modal/selectModal'
import { useCartStore } from '@/components/provider/CartStoreProvider'
import { useModalState } from '@/components/provider/modalProvider'
import { Button, ButtonProps } from '@/components/ui/button'
import useDebounce from '@/lib/hooks/useDebounce'
import { cn } from '@/lib/utils'
import { Product } from '@/types/item'

interface ICartItemInsertButton {
  variant?: ButtonProps['variant']
  product: Product
  children: React.ReactNode
  className?: string
}

export default function CartItemInsertButton({
  variant = 'primary',
  product,
  children,
  className = '',
}: ICartItemInsertButton) {
  const state = useModalState()
  const { add } = useCartStore((state) => state.actions)
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

  const debouncedHandleModalWithAddToCart = useDebounce(handleMoModalWithAddToCart, 500)

  return (
    // <Button variant={'primary'} size={'sm'} className="h-full w-4/5" onClick={handleMoModalWithAddToCart}>
    <Button
      variant={variant}
      size={'sm'}
      className={cn('h-full w-4/5', className)}
      onClick={debouncedHandleModalWithAddToCart}
    >
      {/* <span className=" text-button-base">장바구니에 추가</span> */}
      {children}
    </Button>
  )
}
