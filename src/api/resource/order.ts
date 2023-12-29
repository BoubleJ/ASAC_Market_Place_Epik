import { commonHeader } from '@/api/util/instance'
import { IPaymentParams } from '@/types/order'

// http://localhost:8080/api/orders/payment
export async function fetchOrdersPayment(body: IPaymentParams) {
  const res = await fetch(`api/orders/payment`, {
    method: 'POST',
    headers: commonHeader,
    body: JSON.stringify(body),
  })

  if (res.status !== 200) {
    const errorMsg = await res.text()
    return { errorMessage: errorMsg }
  }

  return await res.json()
}
