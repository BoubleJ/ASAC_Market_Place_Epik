import { basePath, commonHeader } from '@/api/util/instance'
import { IPaymentParams } from '@/types/payment'

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
