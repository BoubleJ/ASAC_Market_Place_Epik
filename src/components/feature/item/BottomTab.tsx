'use client'

import { fetchInsertCartItemById } from '@/api/resource/cart'
import SelectModal from '@/components/common/modal/selectModal'
import SvgHeart from '@/components/icons/heart'
import { useModalState } from '@/components/provider/modalProvider'
import { Button } from '@/components/ui/button'
import { useCartStore } from '@/store/client/cartSlice'
import { Product } from '@/types/item'

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
  }
  return (
    // 찜하기 api, wished 필드 추가되면 찜하기 기능 구현 예정
    <div className="flex px-5 py-3 gap-5 w-full border-t border-grayscale-100 shadow-inner bg-white h-full">
      <Button variant={'outline'} size={'icon'} className="h-full w-[15%] p-3">
        <SvgHeart fill={wished ? 'currentColor' : 'transparent'} width={'w-full'} height={'h-full'} />
      </Button>
      <Button variant={'primary'} size={'sm'} className="h-full w-4/5" onClick={handleAddToCart}>
        <span className=" text-button-base">구매하기</span>
      </Button>
    </div>
  )
}
