'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { fetchInsertCartItemById } from '@/api/resource/cart'
import { fetchOrdersPayment } from '@/api/resource/order'
import CheckModal from '@/components/common/modal/checkModal'
import { useModalState } from '@/components/provider/modalProvider'
import { Button } from '@/components/ui/button'
import { convertNumberFormat } from '@/lib/utils'
import { useCartStore } from '@/store/client/cartSlice'
import { useOrderStore } from '@/store/client/orderSlice'
import { IOrder, IPaymentParams } from '@/types/order'

interface IOrderPaymentButton {
  content: IOrder
}

export default function OrderPaymentButton({ content }: IOrderPaymentButton) {
  const router = useRouter()
  const state = useModalState()
  const { orders, setOrders, isEmpty } = useOrderStore()
  const { unSelectedItems } = useCartStore()
  const restItem = unSelectedItems()
  const isEmptyOrder: boolean = isEmpty()
  const deliveryCharge = 3000
  useEffect(() => {
    setOrders(content)
  }, [setOrders, content])

  const openCheckModal = (content: string) => {
    state.setModal(<CheckModal content={content} />)
    state.modalRef.current?.showModal()
  }

  const handleOnPayment = async () => {
    const body: IPaymentParams = {
      orderId: orders?.orderId!,
      totalPrice: orders?.totalAmount!,
      paymentMethod: 'KAKAOPAY',
    }

    console.log(body)

    const res = await fetchOrdersPayment(body)
    console.log('paymentResult :', res)
    if (res.msg) {
      return openCheckModal(res.msg)
    }
    if (restItem.length !== 0) {
      restItem.map(async (item) => await fetchInsertCartItemById(item.id))
    }
    router.push('/order-complete')
  }

  return (
    <section className="flex justify-center items-center">
      <Button variant={'primary'} size={'lg'} onClick={handleOnPayment} disabled={isEmptyOrder}>
        <span>{convertNumberFormat(orders?.totalAmount! + deliveryCharge)}원 결제하기</span>
      </Button>
    </section>
  )
}
