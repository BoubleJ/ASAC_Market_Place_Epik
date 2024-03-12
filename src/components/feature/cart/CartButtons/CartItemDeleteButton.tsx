import { useRouter } from 'next/navigation'

import { fetchDeleteCartItemById } from '@/api/resource/cart'
import SelectModal from '@/components/common/modal/selectModal'
import { IconXMono } from '@/components/icons'
import { useCartStore } from '@/components/provider/CartStoreProvider'
import { useModalState } from '@/components/provider/modalProvider'
import { Button } from '@/components/ui/button'
import useBlockAsync from '@/lib/hooks/useBlockFunction'
import { CartItem } from '@/types/product'

interface ICartItemDeleteButton {
  product: CartItem
}
export default function CartItemDeleteButton({ product }: ICartItemDeleteButton) {
  const router = useRouter()
  const { removeItem } = useCartStore((state) => state.actions)
  const { isLoading, blockedAsyncFn } = useBlockAsync()

  const state = useModalState()

  const openSelectModal = (content: string, onCheck?: () => void, onCancel?: () => void) => {
    state.setModal(<SelectModal content={content} onCheck={onCheck} onCancel={onCancel} />)
    state.modalRef.current?.showModal()
  }

  const handleDeleteItemFromCart = blockedAsyncFn(async () => {
    const msg: string = await fetchDeleteCartItemById(product.id)
    if (!msg.startsWith('장바구니')) {
      return openSelectModal(`${msg}`)
    }
    removeItem(product.id)
    // router.refresh()
  })

  const handleModalDeleteItemFromCart = () => {
    openSelectModal(`삭제하시겠습니까?`, handleDeleteItemFromCart)
  }

  return (
    <Button variant={'none'} className="ml-auto" onClick={handleModalDeleteItemFromCart} disabled={isLoading}>
      <IconXMono width={'1.25rem'} height={'1.25rem'} className="text-grayscale-400 hover:text-grayscale-900" />
    </Button>
  )
}
