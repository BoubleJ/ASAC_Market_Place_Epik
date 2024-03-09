'use server'
import { cookies } from 'next/headers'

import { baseURL, commonHeader } from '@/api/util/instance'

export const getOrders = async () => {
  try {
    const requestHeaders = new Headers(commonHeader)

    const authToken = cookies().get('AUTH_TOKEN')?.value
    const hasCookies = cookies().has('AUTH_TOKEN')

    if (hasCookies) {
      requestHeaders.set('Authorization', `Bearer ${authToken}`)
    }

    const res = await fetch(`${baseURL}/orders`, {
      headers: requestHeaders,
      cache: 'no-store',
    })

    if (!res.ok) {
      console.log('Failed to get orders', res.status)
      return {
        orderId: 0,
        amount: 0,
        salesTotalAmount: 0,
        totalAmount: 0,
        memberName: '',
        phoneNumber: '',
        address: null,
        orderItemDtos: [],
      }
      // return { msg: '주문서를 불러오는데 실패했습니다.' }
    }

    const response = await res.json()

    return response.data
  } catch (error) {
    return { msg: '주문서를 불러오지 못했습니다' }
  }
}
