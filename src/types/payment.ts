export const DELIVERY_CHARGE = 3000

export const AVAILABLE_PG_TYPE = ['uplus', 'kakaopay'] as const

export type PaymentMethodType = (typeof AVAILABLE_PG_TYPE)[number]

export interface IPaymentParams {
  orderId: number
  totalPrice: number
  paymentMethod: PaymentMethodType
  couponId: number | null
}

export interface PaymentVerifyParams {
  impUid: string
  paymentId: number
}
export interface PaymentResponse {
  success: boolean
  transactionId: null
  paymentStatus: string
  paymentId: number
  errorCode: null
  errorMessage: null
  totalAmount: number
}

export interface PaymentVerifyResponse {
  success: true
  transactionId: string
  paymentStatus: string
  paymentId: number
  errorCode: null
  errorMessage: null
}

export type PortOneResponseDTO = {
  modal_statement?: string
  error_msg?: string
  redirect_path: string
  query_params?: PaymentSuccessQueryParams
}

export type PaymentSuccessQueryParams = {
  name: string
  paid_amount: number
}
