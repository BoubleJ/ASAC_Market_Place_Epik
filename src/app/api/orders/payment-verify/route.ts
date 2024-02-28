import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

import { baseURL } from '@/api/util/instance'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const requestHeaders = new Headers(req.headers)

    const authToken = cookies().get('AUTH_TOKEN')?.value
    const hasCookies = cookies().has('AUTH_TOKEN')

    if (hasCookies) {
      requestHeaders.set('Authorization', `Bearer ${authToken}`)
    }

    const res = await fetch(`${baseURL}/orders/payment-verify`, {
      method: 'POST',
      headers: requestHeaders,
      body: JSON.stringify(body),
    })

    if (!res.ok) {
      console.log('Failed to get payment verification', res.status)
      const msg = await res.json()
      return NextResponse.json(msg)
    }

    const response = await res.json()
    console.log('verify response : ', response)

    return NextResponse.json(response)
  } catch (error) {
    return NextResponse.json({ msg: '결제 검증을 실패했습니다' })
  }
}
