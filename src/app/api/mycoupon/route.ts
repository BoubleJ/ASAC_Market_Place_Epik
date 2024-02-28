import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

import { baseURL } from '@/api/util/instance'

export async function GET(req: NextRequest) {
  const authToken = cookies().get('AUTH_TOKEN')?.value
  const hasCookies = cookies().has('AUTH_TOKEN')
  try {
    const requestHeaders = new Headers(req.headers)

    if (hasCookies) {
      requestHeaders.set('Authorization', `Bearer ${authToken}`)
    }

    const res = await fetch(`${baseURL}/items/getcouponList`, {
      method: 'GET',
      headers: requestHeaders,
    })
    const response = await res.json()
    console.log('쿠폰 목록 !! Authorization', response)    
    return NextResponse.json(response)
  } catch (error) {
    console.log('couponList 에러', error)
    return NextResponse.json({ msg: 'error' })
  }
}
