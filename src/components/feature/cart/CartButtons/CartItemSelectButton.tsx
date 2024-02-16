import { fetchSelectCartItem } from '@/api/resource/cart'
import { encodeCartItemCheckParam } from '@/api/service/cart'
import SelectModal from '@/components/common/modal/selectModal'
import { CheckCircle } from '@/components/icons'
import { useModalState } from '@/components/provider/modalProvider'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useCartStore } from '@/store/client/cartSlice'
import { CartItem } from '@/types/product'

interface ICartItemSelectButton {
  product: CartItem
}

export default function CartItemSelectButton({ product }: ICartItemSelectButton) {
  const { select, unSelect, selectedItems } = useCartStore()

  const state = useModalState()

  const openSelectModal = (content: string, onCheck?: () => void, onCancel?: () => void) => {
    state.setModal(<SelectModal content={content} onCheck={onCheck} onCancel={onCancel} />)
    state.modalRef.current?.showModal()
  }

  const isSelected = () => {
    return selectedItems().some((item) => item.id === product.id)
  }

  const handleSelectItem = async () => {
    const body = encodeCartItemCheckParam(product)
    const msg = await fetchSelectCartItem(body)
    select(product.id)
  }

  const handleUnSelectItem = async () => {
    const body = encodeCartItemCheckParam(product)
    const msg = await fetchSelectCartItem(body)
    unSelect(product.id)
  }

  const handleModalWithItemSelect = () => {
    if (!isSelected()) {
      openSelectModal('상품을 선택하시겠습니까?', handleSelectItem)
    } else {
      openSelectModal('상품을 제외하시겠습니까?', handleUnSelectItem)
    }
  }

  return (
    <Button variant={'none'} size={'checkbox'} className="mr-2 col-span-1" onClick={handleModalWithItemSelect}>
      <CheckCircle
        width={'1.375rem'}
        height={'1.375rem'}
        className={cn('text-grayscale-200 fill-white', {
          'fill-brand-primary-500 text-white': product.selected,
        })}
      />
    </Button>
  )
}
