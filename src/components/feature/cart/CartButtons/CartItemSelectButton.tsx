import { fetchSelectCartItem } from '@/api/resource/cart'
import { encodeCartItemCheckParam } from '@/api/service/cart'
import SelectModal from '@/components/common/modal/selectModal'
import { CheckCircle } from '@/components/icons'
import { useCartStore } from '@/components/provider/CartStoreProvider'
import { useModalState } from '@/components/provider/modalProvider'
import { Button } from '@/components/ui/button'
import useBlockAsync from '@/lib/hooks/useBlockFunction'
import useDebounce from '@/lib/hooks/useDebounce'
import { cn } from '@/lib/utils'
import { CartItem } from '@/types/product'

interface ICartItemSelectButton {
  product: CartItem
}

export default function CartItemSelectButton({ product }: ICartItemSelectButton) {
  const { select, unSelect, selectedItems } = useCartStore((state) => state.actions)

  const state = useModalState()
  const { isLoading: isSelectLoading, blockedAsyncFn: BlockedAsyncSelect } = useBlockAsync()
  const { isLoading: isUnSelectLoading, blockedAsyncFn: BlockedAsyncUnSelect } = useBlockAsync()

  const openSelectModal = (content: string, onCheck?: () => void, onCancel?: () => void) => {
    state.setModal(<SelectModal content={content} onCheck={onCheck} onCancel={onCancel} />)
    state.modalRef.current?.showModal()
  }

  const isSelected = () => {
    return selectedItems().some((item) => item.id === product.id)
  }

  const handleSelectItem = BlockedAsyncSelect(async () => {
    const body = encodeCartItemCheckParam(product)
    const msg = await fetchSelectCartItem(body)
    select(product.id)
  })

  const handleUnSelectItem = BlockedAsyncUnSelect(async () => {
    const body = encodeCartItemCheckParam(product)
    const msg = await fetchSelectCartItem(body)
    unSelect(product.id)
  })

  const handleModalWithItemSelect = () => {
    if (!isSelected()) {
      openSelectModal('상품을 선택하시겠습니까?', handleSelectItem)
    } else {
      openSelectModal('상품을 제외하시겠습니까?', handleUnSelectItem)
    }
  }
  const debouncedHandleModalWithItemSelect = useDebounce(handleModalWithItemSelect, 500)

  return (
    <Button
      variant={'none'}
      size={'checkbox'}
      className="col-span-1 mr-2"
      onClick={debouncedHandleModalWithItemSelect}
      disabled={isSelectLoading || isUnSelectLoading}
    >
      <CheckCircle
        width={'1.375rem'}
        height={'1.375rem'}
        className={cn('fill-white text-grayscale-200', {
          'fill-brand-primary-500 text-white': product.selected,
        })}
      />
    </Button>
  )
}
