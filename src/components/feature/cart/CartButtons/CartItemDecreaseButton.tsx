import { fetchDecreaseCartItemById } from '@/api/resource/cart'
import SelectModal from '@/components/common/modal/selectModal'
import { IconMinusMono } from '@/components/icons'
import { useCartStore } from '@/components/provider/CartStoreProvider'
import { useModalState } from '@/components/provider/modalProvider'
import { Button } from '@/components/ui/button'
import useDebounce from '@/lib/hooks/useDebounce'
import { CartItem } from '@/types/product'

interface ICartItemDecreaseButton {
  product: CartItem
}

export default function CartItemDecreaseButton({ product }: ICartItemDecreaseButton) {
  const cartId = useCartStore((state) => state.cartId)
  const { decrease } = useCartStore((state) => state.actions)
  const state = useModalState()

  const openSelectModal = (content: string, onCheck?: () => void, onCancel?: () => void) => {
    state.setModal(<SelectModal content={content} onCheck={onCheck} onCancel={onCancel} />)
    state.modalRef.current?.showModal()
  }

  const handleDecreaseItemCount = async () => {
    const msg = await fetchDecreaseCartItemById(cartId, product.id)
    if (!msg.startsWith('아이템')) {
      return openSelectModal(`${msg}`)
    }
    decrease(product.id)
  }
  const debouncedHandleDecreaseItemCount = useDebounce(handleDecreaseItemCount, 500)

  return (
    <Button variant={'none'} className="h-fit px-2 py-2" onClick={debouncedHandleDecreaseItemCount}>
      <IconMinusMono width={'1rem'} height={'1rem'} className="text-grayscale-400 hover:text-grayscale-900" />
    </Button>
  )
}
