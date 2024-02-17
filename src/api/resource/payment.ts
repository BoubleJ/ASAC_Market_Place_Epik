import { basePath, commonHeader } from '@/api/util/instance'
import { IPaymentParams } from '@/types/payment'
import { PaymentVerifyParams } from '@/types/payment'

export async function fetchOrdersPayment(body: IPaymentParams) {
  const res = await fetch(`${basePath}/api/orders/payment`, {
    method: 'POST',
    headers: commonHeader,
    body: JSON.stringify(body),
  })

  if (res.status !== 200) {
    const errorMsg = await res.json()
    return { errorMessage: errorMsg }
  }

  const response = await res.json()
  return response
}

export async function fetchPaymentVerify(body: PaymentVerifyParams) {
  const res = await fetch(`${basePath}/api/orders/payment-verify`, {
    method: 'POST',
    headers: commonHeader,
    body: JSON.stringify(body),
  })

  if (res.status !== 200) {
    const errorMsg = await res.json()
    return { errorMessage: errorMsg }
  }

  const response = await res.json()
  console.log(response)
  // const result: PaymentVerifyResponse = response.data
  const result = response.data
  return result
}
