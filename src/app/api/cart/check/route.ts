import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

import { baseURL } from '@/api/util/instance'

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json()
    const requestHeaders = new Headers(req.headers)
    const authToken = cookies().get('AUTH_TOKEN')?.value
    const hasCookies = cookies().has('AUTH_TOKEN')

    if (hasCookies) {
      requestHeaders.set('Authorization', `Bearer ${authToken}`)
    }

    const res = await fetch(`${baseURL}/cart/check`, {
      method: 'PATCH',
      headers: requestHeaders,
      body: JSON.stringify(body),
    })

    if (!res.ok) {
      // throw new Error('Failed to login authenticate')
      console.log('Failed to select item', res.status)
      const response = await res.json()
      return NextResponse.json(response)
    }

    const response = await res.json()

    return NextResponse.json(response)
  } catch (error) {
    console.log('cart item select error :', error)
    return NextResponse.json({ msg: '상품 선택을 실패 했습니다.' })
  }
}
