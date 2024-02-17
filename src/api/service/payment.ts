import { PaymentVerifyParams } from '@/types/payment'

export const encodePaymentVerifyParams = (impUid: string, paymentId: number): PaymentVerifyParams => {
  const verifyParams = {
    impUid,
    paymentId,
  }
  return verifyParams
}
