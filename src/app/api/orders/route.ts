import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

import { baseURL } from '@/api/util/instance'

export async function GET(req: NextRequest) {
  const requestHeaders = new Headers(req.headers)
  try {
    const authToken = cookies().get('AUTH_TOKEN')?.value
    const hasCookies = cookies().has('AUTH_TOKEN')

    if (hasCookies) {
      requestHeaders.set('Authorization', `Bearer ${authToken}`)
    }

    const res = await fetch(`${baseURL}/orders`, {
      headers: requestHeaders,
    })

    if (!res.ok) {
      console.log('Failed to get orders', res.status)
      const response = await res.json()
      console.log(response)
      return NextResponse.json({ msg: '주문서를 불러오는데 실패했습니다.' })
    }

    const response = await res.json()
    console.log(response)

    return NextResponse.json(response)
  } catch (error) {
    console.log(error)
    return NextResponse.json({ msg: '주문서를 불러오지 못했습니다' })
  }
}
