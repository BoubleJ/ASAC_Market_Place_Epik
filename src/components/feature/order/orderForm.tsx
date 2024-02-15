'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import CheckModal from '@/components/common/modal/checkModal'
import { useModalState } from '@/components/provider/modalProvider'
import { Form } from '@/components/ui/form'
import { PaymentParamCreator } from '@/lib/payment/PaymentParamCreator'
import { initializePaymentModule, requestPayment } from '@/lib/payment/portOnePayment'
import { orderFormSchema } from '@/lib/schema/order'
import { useCartStore } from '@/store/client/cartSlice'
import { useOrderStore } from '@/store/client/orderSlice'
import { RequestPayResponse, RequestPayResponseCallback } from '@/types/portone'

import OrderAddress from './orderAddress'
import OrderBill from './orderBill'
import OrderContainer from './orderContainer'
import OrderCoupon from './orderCoupon'
import OrderPaymentButton from './orderPaymentButton'
import OrderPaymentMothod from './orderPaymentMothod'
import OrderReserves from './orderReserves'
import OrderShippingRequirement from './orderShippingRequirement'
import OrderTerms from './orderTerms'

const FormSchema = orderFormSchema

function OrderForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {},
  })

  const router = useRouter()
  const state = useModalState()
  const { orders, setOrders, isEmpty, orderName } = useOrderStore()
  const { unSelectedItems } = useCartStore()
  const restItem = unSelectedItems()

  const openCheckModal = (content: string) => {
    state.setModal(<CheckModal content={content} />)
    state.modalRef.current?.showModal()
  }

  const callback: RequestPayResponseCallback = function (response: RequestPayResponse) {
    const { status, error_msg, success } = response
    console.log('status', status)
    if (error_msg) {
      console.log(error_msg)
      return openCheckModal(error_msg)
    }
    if (status === 'paid') {
      // 아임포트에서 채번한 결제 id
      const { imp_uid } = response

      // 백엔드에 검증 요청
      // verifyPayment(imp_uid, paymentId) // > back api

      // router.push('/order-complete')
    }
  }

  // handle payment order submit
  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    console.log(data)
    try {
      if (orders === null || orderName === null) return

      const paymentParamCreator = new PaymentParamCreator(orders, data, orderName)

      // const body: IPaymentParams = {
      //   orderId: orders?.orderId!,
      //   totalPrice: orders?.totalAmount!,
      //   paymentMethod: data.payment_method,
      // }

      const body = paymentParamCreator.createPaymentParam()
      // const res = await fetchOrdersPayment(body)

      // if (res.msg) {
      //   return openCheckModal(res.msg)
      // }

      // if (restItem.length !== 0) {
      //   restItem.map(async (item) => await fetchInsertCartItemById(item.id))
      // }

      // portone 결제 요청
      initializePaymentModule()
      // requestPayment(createPaymentParam(orderName!, body), callback)
      requestPayment(paymentParamCreator.createPortOnePaymentParam(), callback)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 divide-y-8 divide-grayscale-50">
          <OrderContainer>
            <OrderAddress />
          </OrderContainer>
          <OrderContainer>
            <OrderShippingRequirement />
          </OrderContainer>
          <OrderContainer>
            <OrderCoupon />
          </OrderContainer>
          <OrderContainer>
            <OrderReserves />
          </OrderContainer>
          <OrderContainer>
            <OrderPaymentMothod />
          </OrderContainer>
          <OrderContainer className="py-0 pt-[18px] pb-[30px]">
            <OrderBill />
          </OrderContainer>
          <OrderContainer className="py-0 pb-[61px]">
            <OrderTerms />
            <OrderPaymentButton />
          </OrderContainer>
        </form>
      </Form>
    </>
  )
}

export default OrderForm
