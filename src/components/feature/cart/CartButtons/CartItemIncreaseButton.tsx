import { fetchIncreaseCartItemById } from '@/api/resource/cart'
import SelectModal from '@/components/common/modal/selectModal'
import { IconPlusMono } from '@/components/icons'
import { useCartStore } from '@/components/provider/CartStoreProvider'
import { useModalState } from '@/components/provider/modalProvider'
import { Button } from '@/components/ui/button'
import useBlockAsync from '@/lib/hooks/useBlockFunction'
import useDebounce from '@/lib/hooks/useDebounce'
import { CartItem } from '@/types/product'

interface ICartItemIncreaseButton {
  product: CartItem
}

export default function CartItemIncreaseButton({ product }: ICartItemIncreaseButton) {
  const { increase } = useCartStore((state) => state.actions)
  const { isLoading, blockedAsyncFn } = useBlockAsync()

  const state = useModalState()

  const openSelectModal = (content: string, onCheck?: () => void, onCancel?: () => void) => {
    state.setModal(<SelectModal content={content} onCheck={onCheck} onCancel={onCancel} />)
    state.modalRef.current?.showModal()
  }

  const handleIncreaseItemCount = blockedAsyncFn(async () => {
    const msg = await fetchIncreaseCartItemById(product.id)
    if (!msg.startsWith('아이템')) {
      return openSelectModal(`${msg}`)
    }
    increase(product.id)
  })

  const debouncedHandleIncreaseItemCount = useDebounce(handleIncreaseItemCount, 500)

  return (
    <Button
      variant={'none'}
      className="h-fit px-2 py-2"
      onClick={debouncedHandleIncreaseItemCount}
      disabled={isLoading}
    >
      <IconPlusMono width={'1rem'} height={'1rem'} className="text-grayscale-400 hover:text-grayscale-900" />
    </Button>
  )
}
