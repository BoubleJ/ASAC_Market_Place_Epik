import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

import { baseURL } from '@/api/util/instance'

export async function GET(req: NextRequest) {
  try {
    const requestHeaders = new Headers(req.headers)
    const authToken = cookies().get('AUTH_TOKEN')?.value
    const hasCookies = cookies().has('AUTH_TOKEN')

    if (hasCookies) {
      requestHeaders.set('Authorization', `Bearer ${authToken}`)
    }

    const res = await fetch(`${baseURL}/cart`, {
      method: 'GET',
      headers: requestHeaders,
    })

    if (!res.ok) {
      // throw new Error('Failed to login authenticate')
      console.log('Failed to get Cart', res.status)
      return NextResponse.json({ msg: '장바구니를 불러오는데 실패했습니다.' })
    }

    const response = await res.json()
    console.log(response)

    return NextResponse.json(response)
  } catch (error) {
    return NextResponse.json({ msg: '장바구니를 불러오지 못 했습니다.' })
  }
}
