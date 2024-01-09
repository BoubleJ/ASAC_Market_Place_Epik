import Image from 'next/image'

import {
  fetchDecreaseCartItemById,
  fetchDeleteCartItemById,
  fetchIncreaseCartItemById,
  fetchInsertCartItemById,
} from '@/api/resource/cart'
import SelectModal from '@/components/common/modal/selectModal'
import { CheckCircle, IconMinusMono, IconPlusMono, IconXMono } from '@/components/icons'
import { useModalState } from '@/components/provider/modalProvider'
import { Button } from '@/components/ui/button'
import { checkDummyImageUrl, cn, convertNumberFormat } from '@/lib/utils'
import { useCartStore } from '@/store/client/cartSlice'
import { CartItem } from '@/types/product'

interface ICartItemCard {
  product: CartItem
}

export default function CartItemCard({ product }: ICartItemCard) {
  const { cartId, selectedItems, add, decrease, removeItem, select } = useCartStore()
  const state = useModalState()

  const openSelectModal = (content: string, onCheck?: () => void, onCancel?: () => void) => {
    state.setModal(<SelectModal content={content} onCheck={onCheck} onCancel={onCancel} />)
    state.modalRef.current?.showModal()
  }

  const handleIncreaseItemCount = async () => {
    const msg = await fetchIncreaseCartItemById(product.id)
    if (!msg.startsWith('아이템')) {
      return openSelectModal(`상품의 개수를 추가하는데 실패했습니다.`)
    }
    add(product)
  }
  const handleDecreaseItemCount = async () => {
    const msg = await fetchDecreaseCartItemById(cartId, product.id)
    if (!msg.startsWith('아이템')) {
      return openSelectModal(`상품의 개수를 줄이는데 실패했습니다.`)
    }
    decrease(product.id)
  }

  const handleDeleteItemFromCart = async () => {
    const msg: string = await fetchDeleteCartItemById(product.id)
    if (!msg.startsWith('장바구니')) {
      return openSelectModal(`${msg}`)
    }
    removeItem(product.id)
  }
  const handleModalDeleteItemFromCart = () => {
    openSelectModal(`삭제하시겠습니까?`, handleDeleteItemFromCart)
  }
  const isSelected = () => {
    return selectedItems().some((item) => item.id === product.id)
  }
  const handleSelectItem = async () => {
    const msg = await fetchInsertCartItemById(product.id)
    if (!msg.startsWith('장바구니')) {
      return openSelectModal(`${msg}`)
    }
    select(product.id)
  }
  const handleUnSelectItem = async () => {
    const msg = await fetchDeleteCartItemById(product.id)
    if (!msg.startsWith('장바구니')) {
      return openSelectModal(`${msg}`)
    }
    select(product.id)
  }
  const handleModalWithItemSelect = () => {
    if (!isSelected()) {
      console.log('select')
      openSelectModal('상품을 선택하시겠습니까?.', handleSelectItem)
    } else {
      console.log('unselect')
      openSelectModal('상품을 제외하시겠습니까? 제외된 상품의 수량은 1 이됩니다.', handleUnSelectItem)
    }
  }

  return (
    <div className="grid grid-cols-12">
      <Button variant={'none'} size={'checkbox'} className="mr-2 col-span-1" onClick={handleModalWithItemSelect}>
        <CheckCircle
          width={'1.375rem'}
          height={'1.375rem'}
          className={cn('text-grayscale-200 fill-white', {
            'fill-brand-primary-500 text-white': product.selected,
          })}
        />
      </Button>
      <div className="flex flex-col col-span-10 gap-4">
        <span className="text-body-sm line-clamp-2">{product.name}</span>
        <div className="flex h-2/3 gap-4">
          {!checkDummyImageUrl(product.promotionUrl) ? (
            <Image width={70} height={90} src={product.promotionUrl} alt={`${product.name}`} />
          ) : (
            <Image width={70} height={90} src={'/images/default_product_image.svg'} alt={`${product.name}`} />
          )}
          <div className="flex flex-col justify-between">
            <span className="text-body-lg">{convertNumberFormat(product.itemPrice)}원</span>
            <div className="flex justify-between items-center border border-grayscale-100 h-fit w-[90px] h-[30px] rounded-lg">
              <Button variant={'none'} className="px-2 py-2 h-fit" onClick={handleDecreaseItemCount}>
                <IconMinusMono width={'1rem'} height={'1rem'} className="text-grayscale-400 hover:text-grayscale-900" />
              </Button>
              <span className="text-body-xs">{product.count}</span>
              <Button variant={'none'} className="px-2 py-2 h-fit" onClick={handleIncreaseItemCount}>
                <IconPlusMono width={'1rem'} height={'1rem'} className="text-grayscale-400 hover:text-grayscale-900" />
              </Button>
            </div>
          </div>
          <Button variant={'none'} className="ml-auto" onClick={handleModalDeleteItemFromCart}>
            <IconXMono width={'1.25rem'} height={'1.25rem'} className="text-grayscale-400 hover:text-grayscale-900" />
          </Button>
        </div>
      </div>
    </div>
  )
}
