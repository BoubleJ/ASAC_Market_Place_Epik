import { fetchIncreaseCartItemById } from '@/api/resource/cart'
import SelectModal from '@/components/common/modal/selectModal'
import { IconPlusMono } from '@/components/icons'
import { useModalState } from '@/components/provider/modalProvider'
import { Button } from '@/components/ui/button'
import { useCartStore } from '@/store/client/cartSlice'
import { CartItem } from '@/types/product'

interface ICartItemIncreaseButton {
  product: CartItem
}

export default function CartItemIncreaseButton({ product }: ICartItemIncreaseButton) {
  const { add } = useCartStore()

  const state = useModalState()

  const openSelectModal = (content: string, onCheck?: () => void, onCancel?: () => void) => {
    state.setModal(<SelectModal content={content} onCheck={onCheck} onCancel={onCancel} />)
    state.modalRef.current?.showModal()
  }

  const handleIncreaseItemCount = async () => {
    const msg = await fetchIncreaseCartItemById(product.id)
    if (!msg.startsWith('아이템')) {
      return openSelectModal(`${msg}`)
    }
    add(product)
  }

  return (
    <Button variant={'none'} className="px-2 py-2 h-fit" onClick={handleIncreaseItemCount}>
      <IconPlusMono width={'1rem'} height={'1rem'} className="text-grayscale-400 hover:text-grayscale-900" />
    </Button>
  )
}
