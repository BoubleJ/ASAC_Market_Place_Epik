'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { fetchOrdersPayment, fetchPaymentVerify } from '@/api/resource/payment'
import { encodePaymentVerifyParams } from '@/api/service/payment'
import CheckModal from '@/components/common/modal/checkModal'
import OrderAddress from '@/components/feature/order/orderAddress'
import OrderBill from '@/components/feature/order/orderBill'
import OrderContainer from '@/components/feature/order/orderContainer'
import OrderCoupon from '@/components/feature/order/orderCoupon'
import OrderPaymentButton from '@/components/feature/order/orderPaymentButton'
import OrderPaymentMethod from '@/components/feature/order/OrderPaymentMethod'
import OrderReserves from '@/components/feature/order/orderReserves'
import OrderShippingRequirement from '@/components/feature/order/orderShippingRequirement'
import OrderTerms from '@/components/feature/order/orderTerms'
import { useModalState } from '@/components/provider/modalProvider'
import { Form } from '@/components/ui/form'
import { PaymentParamCreator } from '@/lib/payment/PaymentParamCreator'
import { initializePaymentModule, requestPayment } from '@/lib/payment/portOnePayment'
import { orderFormSchema } from '@/lib/schema/order'
import { useOrderStore } from '@/store/client/orderSlice'
import { RequestPayResponse, RequestPayResponseCallback } from '@/types/portone'

// portone 결제 초기화
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
      // 주소 api 작업

      // portone 결제 요청
      initializePaymentModule()
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
            <OrderPaymentMethod />
          </OrderContainer>
          <OrderContainer className="py-0 pb-[30px] pt-[18px]">
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
