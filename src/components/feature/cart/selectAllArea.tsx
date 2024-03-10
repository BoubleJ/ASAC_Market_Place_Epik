'use client'

import { fetchDeleteCartItemById, fetchSelectCartItem } from '@/api/resource/cart'
import { encodeCartItemCheckParam } from '@/api/service/cart'
import SelectModal from '@/components/common/modal/selectModal'
import CheckCircle from '@/components/icons/check-circle'
import { useCartStore } from '@/components/provider/CartStoreProvider'
import { useModalState } from '@/components/provider/modalProvider'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function SelectAllArea() {
  const cart = useCartStore((state) => state.cart)
  const { count, selectedCount, selectAll, removeSelectedItem, selectedItems, unSelectAll, isAllChecked, isEmpty } =
    useCartStore((state) => state.actions)
  const state = useModalState()

  const openSelectModal = (content: string, onCheck?: () => void, onCancel?: () => void) => {
    state.setModal(<SelectModal content={content} onCheck={onCheck} onCancel={onCancel} />)
    state.modalRef.current?.showModal()
  }

  const handleSelectAllProduct = async () => {
    if (isAllChecked()) {
      const promises: Promise<void>[] = selectedItems().map((item) => {
        const body = encodeCartItemCheckParam(item)
        return fetchSelectCartItem(body)
      })
      await Promise.all(promises)
      unSelectAll()
    } else {
      const promises: Promise<void>[] = cart.map(async (item) => {
        const body = encodeCartItemCheckParam(item)
        return fetchSelectCartItem(body)
      })
      await Promise.all(promises)
      selectAll()
    }
  }

  const handleDeleteSelectedProduct = async () => {
    selectedItems().map(async (item) => await fetchDeleteCartItemById(item.id))
    removeSelectedItem()
  }

  const handleModalWithDeleteSelectedProduct = async () => {
    openSelectModal('삭제하시겠습니까?', handleDeleteSelectedProduct)
  }

  return (
    <section className="flex w-full items-center justify-between px-5">
      <div className="flex items-center text-body-sm">
        <Button variant={'none'} size={'checkbox'} className="mr-2" onClick={handleSelectAllProduct}>
          <CheckCircle
            width={'1.375rem'}
            height={'1.375rem'}
            className={cn('fill-white text-grayscale-200', {
              'fill-brand-primary-500 text-white': isAllChecked(),
            })}
          />
        </Button>
        <span>전체선택</span>
        <span>
          ({selectedCount()}/{count()})
        </span>
      </div>
      <Button variant={'none'} className="" onClick={handleModalWithDeleteSelectedProduct} disabled={isEmpty()}>
        선택삭제
      </Button>
    </section>
  )
}
