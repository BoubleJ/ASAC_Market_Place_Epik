import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

import { baseURL } from '@/api/util/instance'

export async function POST(req: NextRequest) {
  const authToken = cookies().get('AUTH_TOKEN')?.value
  const hasCookies = cookies().has('AUTH_TOKEN')
  try {
    const itemId = req.nextUrl.searchParams.get('itemId')
    const requestHeaders = new Headers()

    if (hasCookies) {
      requestHeaders.set('Authorization', `Bearer ${authToken}`)
    }
    const res = await fetch(`${baseURL}/cart/item/add?itemId=${itemId}`, {
      method: 'POST',
      headers: requestHeaders,
    })

    if (!res.ok) {
      // throw new Error('Failed to login authenticate')
      console.log('Failed to increase item Cart', res.status)
      const response = await res.json()
      return NextResponse.json(response)
    }

    const response = await res.json()

    return NextResponse.json(response)
  } catch (error) {
    console.log('cart increase error :', error)
    return NextResponse.json({ msg: '상품을 개수를 추가하지 못했습니다' })
  }
}
