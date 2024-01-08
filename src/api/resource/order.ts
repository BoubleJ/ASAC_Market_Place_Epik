import { basePath, commonHeader } from '@/api/util/instance'
import { IPaymentParams } from '@/types/order'

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

export async function fetchOrders() {
  const res = await fetch(`${basePath}/api/orders`, {
    headers: commonHeader,
  })

  if (res.status !== 200) {
    const errorMsg = await res.json()
    return { errorMessage: errorMsg }
  }

  const response = await res.json()
  return response.data
}

export async function fetchOrderList(month: number) {
  const res = await fetch(`${basePath}/api/mypage/member/orderlist?month=${month}`, {
    headers: commonHeader,
  })

  if (res.status !== 200) {
    const errorMsg = await res.json()
    return { errorMessage: errorMsg }
  }

  const response = await res.json()
  return response.data
}

export async function fetchOrderListDetail(orderId: number) {
  const res = await fetch(`${basePath}/api/mypage/member/orderlist/detail/${orderId}`, {
    headers: commonHeader,
  })

  if (res.status !== 200) {
    const errorMsg = await res.json()
    return { errorMessage: errorMsg }
  }

  const response = await res.json()
  return response.data
}
