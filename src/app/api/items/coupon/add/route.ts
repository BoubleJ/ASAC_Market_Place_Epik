import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

import { baseURL } from '@/api/util/instance'

export async function POST(req: NextRequest) {
  const authToken = cookies().get('AUTH_TOKEN')?.value
  const hasCookies = cookies().has('AUTH_TOKEN')
  try {
    // const requestHeaders = new Headers(req.headers)
    const requestHeaders = new Headers()

    if (hasCookies) {
      requestHeaders.set('Authorization', `Bearer ${authToken}`)
    }

    const res = await fetch(`${baseURL}/items/coupon`, {
      method: 'POST',
      headers: requestHeaders,
    })

    if (!res.ok) {
      // throw new Error('Failed to login authenticate')
      console.log('Failed to download coupon', res.status)
      const response = await res.json()
      return NextResponse.json(response)
    }

    const response = await res.json()
    console.log(response)
    return NextResponse.json(response)
  } catch (error) {
    console.log('coupon download error :', error)
    return NextResponse
  }
}
