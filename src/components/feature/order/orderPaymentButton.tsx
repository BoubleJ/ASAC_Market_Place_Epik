'use client'

import { useRouter } from 'next/navigation'

import { fetchOrdersPayment } from '@/api/resource/order'
import CheckModal from '@/components/common/modal/checkModal'
import { useModalState } from '@/components/provider/modalProvider'
import { Button } from '@/components/ui/button'
import { useOrderStore } from '@/store/client/orderSlice'
import { IPaymentParams } from '@/types/order'

export default function OrderPaymentButton() {
  const router = useRouter()
  const state = useModalState()
  const { orders } = useOrderStore()

  console.log(orders)

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

    const res = await fetchOrdersPayment(body)
    if (typeof res === 'string') {
      return openCheckModal(res)
    }
    router.push('/order-complete')
  }

  return (
    <Button variant={'primary'} size={'lg'} onClick={handleOnPayment}>
      <span>{orders?.totalAmount!}원 결제하기</span>
    </Button>
  )
}
