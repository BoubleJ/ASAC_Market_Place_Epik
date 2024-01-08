'use client'

import { fetchDeleteCartItemById, fetchInsertCartItemById } from '@/api/resource/cart'
import SelectModal from '@/components/common/modal/selectModal'
import CheckCircle from '@/components/icons/check-circle'
import { useModalState } from '@/components/provider/modalProvider'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useCartStore } from '@/store/client/cartSlice'

export default function SelectAllArea() {
  const { cart, selectedCount, selectAll, removeSelectedItem, selectedItems, unSelectAll } = useCartStore()
  const state = useModalState()

  const openSelectModal = (content: string, onCheck?: () => void, onCancel?: () => void) => {
    state.setModal(<SelectModal content={content} onCheck={onCheck} onCancel={onCancel} />)
    state.modalRef.current?.showModal()
  }

  const isAllChecked = () => {
    return cart.length ? !cart.some((item) => item.selected === false) : false
  }
  const handleSelectAllProduct = () => {
    if (isAllChecked()) {
      console.log('all checked so unselect all')
      selectedItems().map(async (item) => await fetchDeleteCartItemById(item.id))
      unSelectAll()
    } else {
      console.log('all unchecked so select all')
      cart.map(async (item) => await fetchInsertCartItemById(item.id))
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
    <section className="flex justify-between items-center px-5 w-full">
      <div className="flex items-center text-body-sm">
        <Button variant={'none'} size={'checkbox'} className="mr-2" onClick={handleSelectAllProduct}>
          <CheckCircle
            width={'1.375rem'}
            height={'1.375rem'}
            className={cn('text-grayscale-200 fill-white', {
              'fill-brand-primary-500 text-white': isAllChecked(),
            })}
          />
        </Button>
        <span>전체선택</span>
        <span>
          ({selectedCount()}/{cart.length})
        </span>
      </div>
      <Button variant={'none'} className="" onClick={handleModalWithDeleteSelectedProduct}>
        선택삭제
      </Button>
    </section>
  )
}
