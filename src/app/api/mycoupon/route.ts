import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

import { baseURL } from '@/api/util/instance'

export async function GET(req: NextRequest) {
  const authToken = cookies().get('AUTH_TOKEN')?.value
  const hasCookies = cookies().has('AUTH_TOKEN')
  try {
    const requestHeaders = new Headers(req.headers)
    // console.log('cookie', cookies().getAll())
    if (hasCookies) {
      requestHeaders.set('Authorization', `Bearer ${authToken}`)
    }
    console.log('쿠폰 목록 !! Authorization', requestHeaders)

    const res = await fetch(`${baseURL}/items/getcouponList`, {
      method: 'GET',
      headers: requestHeaders,
      // headers: commonHeader,
    })
    const response = await res.json()
    return NextResponse.json(response)

    // return res
  } catch (error) {
    console.log('couponList에러', error)
    return NextResponse.json({ msg: 'error' })
  }
}

// export const GET = async () => {
//   return NextResponse.json({ message: 'Hello, Next.js Version 13!' }, { status: 200 })
// }
