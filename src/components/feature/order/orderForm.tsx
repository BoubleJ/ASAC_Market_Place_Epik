'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { fetchOrdersPayment } from '@/api/resource/payment'
import CheckModal from '@/components/common/modal/checkModal'
import OrderAddress from '@/components/feature/order/orderAddress'
import OrderBill from '@/components/feature/order/orderBill'
import OrderContainer from '@/components/feature/order/orderContainer'
import OrderCoupon from '@/components/feature/order/orderCoupon'
import OrderPaymentButton from '@/components/feature/order/orderPaymentButton'
import { OrderPaymentMethod } from '@/components/feature/order/OrderPaymentMethod'
import OrderReserves from '@/components/feature/order/orderReserves'
import OrderShippingRequirement from '@/components/feature/order/orderShippingRequirement'
import OrderTerms from '@/components/feature/order/orderTerms'
import { useModalState } from '@/components/provider/modalProvider'
import { useOrderStore } from '@/components/provider/OrderStoreProvider'
import { Form } from '@/components/ui/form'
import {
  createPaymentParamFactory,
  paymentPostProcess,
  PortOneCallback,
  requestPayment,
} from '@/lib/payment/portOnePayment'
import { orderFormSchema } from '@/lib/schema/order'
import { PaymentResponse } from '@/types/payment'

// portone 결제 초기화
const FormSchema = orderFormSchema

function OrderForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {},
  })

  const router = useRouter()
  const state = useModalState()
  const { orders, getOrderName } = useOrderStore((state) => state)
  const orderName = getOrderName(orders)

  const openCheckModal = (content: string, onClick?: () => void) => {
    state.setModal(<CheckModal content={content} onClick={onClick} />)
    state.modalRef.current?.showModal()
  }

  const PostProcess = paymentPostProcess(router, orders, openCheckModal)

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    console.log(data)
    try {
      if (orders === null || orderName === null) return

      const paymentParamFactory = createPaymentParamFactory(data, orders, orderName)

      const paymentRes: { data: PaymentResponse } = await fetchOrdersPayment(
        paymentParamFactory.getPaymentResquestParam(),
      )

      if (paymentRes.data.errorMessage) {
        return openCheckModal(paymentRes.data.errorMessage)
      }
      requestPayment(
        paymentParamFactory.getProtOneRequestParam(paymentRes.data),
        PortOneCallback(paymentRes.data, PostProcess),
      )
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 divide-y-8 divide-grayscale-50">
          <OrderAddress />
          <OrderShippingRequirement />
          <OrderCoupon />
          <OrderReserves />
          <OrderPaymentMethod />
          <OrderBill />
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
