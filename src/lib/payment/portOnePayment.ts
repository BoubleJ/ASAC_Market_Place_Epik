import { IOrder } from '@/types/order'
import { DELIVERY_CHARGE, IPaymentParams, PaymentResponse } from '@/types/payment'
import { RequestPayParams, RequestPayResponseCallback } from '@/types/portone'

import { OrderFormInterface } from '../schema/order'

export function initializePaymentModule() {
  if (!window.IMP) return
  console.log('initialize IMP')
  window.IMP.init(`${process.env.NEXT_PUBLIC_PORTONE_ID_CODE}`)
}

export function getMerchantUID(orderIdfromServer: number) {
  return `mid_${new Date().getTime()}_${orderIdfromServer}_${crypto.randomUUID()}`
}

export function requestPayment(body: RequestPayParams, callback: RequestPayResponseCallback) {
  console.log('portone request', body)

  if (!window.IMP) return
  return window.IMP?.request_pay(body, callback)
}

export const createPaymentParamFactory = (data: OrderFormInterface, orders: IOrder, orderName: string) => ({
  getPaymentResquestParam: (): IPaymentParams => {
    return {
      orderId: orders.orderId,
      totalPrice: orders.totalAmount,
      paymentMethod: data.payment_method,
      couponId: !data.coupon ? null : Number(data.coupon),
    }
  },
  getProtOneRequestParam: (paymentResponse: PaymentResponse): RequestPayParams => {
    console.log(paymentResponse)
    return {
      pg: String(data.payment_method),
      pay_method: 'card',
      name: `${orderName}`,
      merchant_uid: getMerchantUID(paymentResponse.paymentId),
      amount: Number(paymentResponse.totalAmount + DELIVERY_CHARGE),
    }
  },
})
