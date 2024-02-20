export const DELIVERY_CHARGE = 3000

export const AVAILABLE_PG_TYPE = ['uplus', 'kakaopay'] as const

export type PaymentMethodType = (typeof AVAILABLE_PG_TYPE)[number]

export interface IPaymentParams {
  orderId: number
  totalPrice: number
  paymentMethod: PaymentMethodType
}

export interface PaymentVerifyParams {
  impUid: string
  paymentId: number
}

export interface PaymentVerifyResponse {
  success: true
  transactionId: string
  paymentStatus: string
  paymentId: number
  errorCode: null
  errorMessage: null
}
