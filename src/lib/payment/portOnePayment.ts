import { DELIVERY_CHARGE, IPaymentParams } from '@/types/payment'
import { RequestPayParams, RequestPayResponseCallback } from '@/types/portone'

export function initializePaymentModule() {
  if (!window.IMP) return
  console.log('initialize IMP')
  window.IMP.init(`${process.env.NEXT_PUBLIC_PORTONE_ID_CODE}`)
}

export function getMerchantUID(orderIdfromServer: number) {
  // mid_1707588675570_202_d47fa79f-ec33-4feb-86d0-8295c8d566e1
  return `mid_${new Date().getTime()}_${orderIdfromServer}_${crypto.randomUUID()}`
}

export const createPaymentParam = (orderName: string, paymentParams: IPaymentParams): RequestPayParams => {
  return {
    pg: String(paymentParams?.paymentMethod),
    pay_method: 'card',
    name: `${orderName}`,
    merchant_uid: getMerchantUID(paymentParams?.orderId!),
    amount: Number(paymentParams?.totalPrice! + DELIVERY_CHARGE),
  }
}

export function requestPayment(body: RequestPayParams, callback: RequestPayResponseCallback) {
  if (!window.IMP) return
  return window.IMP?.request_pay(body, callback)
}
