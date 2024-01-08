import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

import { baseURL } from '@/api/util/instance'

export async function GET(req: NextRequest, { params }: { params: { orderId: number } }) {
  try {
    const orderId = params.orderId
    const requestHeaders = new Headers(req.headers)

    const authToken = cookies().get('AUTH_TOKEN')?.value
    const hasCookies = cookies().has('AUTH_TOKEN')

    if (hasCookies) {
      requestHeaders.set('Authorization', `Bearer ${authToken}`)
    }

    const res = await fetch(`${baseURL}/members/mypage/orderlist/detail/${orderId}`, {
      headers: requestHeaders,
    })

    if (!res.ok) {
      console.log('Failed to get orderlist', res.status)
      return NextResponse.json({ msg: '상세 주문 내역을 불러오는데 실패했습니다.' })
    }

    const response = await res.json()
    console.log(response)

    return NextResponse.json(response)
  } catch (error) {
    return NextResponse.json({ msg: '상세 주문 내역을 불러오지 못했습니다' })
  }
}
