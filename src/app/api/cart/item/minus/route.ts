import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

import { baseURL } from '@/api/util/instance'

export async function POST(req: NextRequest) {
  try {
    const cartId = req.nextUrl.searchParams.get('cartId')
    const itemId = req.nextUrl.searchParams.get('itemId')
    const requestHeaders = new Headers(req.headers)

    const authToken = cookies().get('AUTH_TOKEN')?.value
    const hasCookies = cookies().has('AUTH_TOKEN')

    if (hasCookies) {
      requestHeaders.set('Authorization', `Bearer ${authToken}`)
    }

    const res = await fetch(`${baseURL}/cart/item/minus?cartId=${cartId}&itemId=${itemId}`, {
      method: 'POST',
      headers: requestHeaders,
    })

    if (!res.ok) {
      // throw new Error('Failed to login authenticate')
      console.log('Failed to decrease item count', res.status)
      return NextResponse.json({ msg: '상품을 개수를 줄이는데 실패했습니다.' })
    }

    const response = await res.json()
    console.log(response)

    return NextResponse.json(response)
  } catch (error) {
    return NextResponse.json({ msg: '상품을 개수를 줄이지 못했습니다' })
  }
}
