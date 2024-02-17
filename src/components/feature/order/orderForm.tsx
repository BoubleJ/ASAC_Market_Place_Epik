'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { fetchOrdersPayment, fetchPaymentVerify } from '@/api/resource/payment'
import { encodePaymentVerifyParams } from '@/api/service/payment'
import CheckModal from '@/components/common/modal/checkModal'
import { useModalState } from '@/components/provider/modalProvider'
import { Form } from '@/components/ui/form'
import { PaymentParamCreator } from '@/lib/payment/PaymentParamCreator'
import { initializePaymentModule, requestPayment } from '@/lib/payment/portOnePayment'
import { orderFormSchema } from '@/lib/schema/order'
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

// portone 결제 초기화
initializePaymentModule()
const FormSchema = orderFormSchema

function OrderForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {},
  })

  const router = useRouter()
  const state = useModalState()
  const { orders, orderName } = useOrderStore()

  const openCheckModal = (content: string) => {
    state.setModal(<CheckModal content={content} />)
    state.modalRef.current?.showModal()
  }

  const PortOneCallback = (paymentId: number) => async (response: RequestPayResponse) => {
    const { status, error_msg, success } = response
    console.log('포트원 결제 응답 객체', response)
    if (error_msg) {
      console.log(error_msg)
      return openCheckModal(error_msg)
    }
    if (status === 'paid') {
      // 아임포트에서 채번한 결제 id
      const { imp_uid } = response

      // 백엔드에 검증 요청
      const body = encodePaymentVerifyParams(imp_uid!, paymentId)

      const verify_response = await fetchPaymentVerify(body)

      console.log(verify_response)

      if (verify_response.msg) {
        return openCheckModal(verify_response.msg)
      }

      if (success) {
        router.push('/order-complete')
      } else {
        router.push(`/order-fail`)
      }
    }
  }

  // handle payment order submit
  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    console.log(data)
    try {
      if (orders === null || orderName === null) return

      const paymentParamCreator = new PaymentParamCreator(orders, data, orderName)

      const body = paymentParamCreator.createPaymentParam()
      const res = await fetchOrdersPayment(body)

      if (res.msg) {
        return openCheckModal(res.msg)
      }

      console.log(res)
      const paymentId: number = res.data.paymentId

      // portone 결제 요청
      const callback: RequestPayResponseCallback = PortOneCallback(paymentId)
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
