import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

import { baseURL } from '@/api/util/instance'

export async function GET(req: NextRequest) {
  try {
    const requestHeaders = new Headers(req.headers)

    if (!cookies().has('auth-token')) {
      return NextResponse.json({ data: {} })
    }
    requestHeaders.set('Authorization', `Bearer ${cookies().get('auth-token')?.value}`)

    const res = await fetch(`${baseURL}/orders/payment`, {
      headers: requestHeaders,
    })

    if (!res.ok) {
      throw new Error('Failed to check email')
    }

    return NextResponse.json(await res.json())
  } catch (error) {
    return NextResponse.redirect(`http://localhost:3000/signup`)
  }
}
// Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrZGhnYnlAbmF2ZXIuY29tIiwibWVtYmVySWQiOjI1MiwibG9naW5JZCI6Imx1Y3k0NTYiLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNzAzMDUwMTE5fQ.iWBf_4-mWKiqxKTCQD987OR_oyrOgcIfHG9jUOc3QAR1A4TBZ7jKXHkKcndJcGHVFd-uS0jkruw__5oS2j7E8A
// http://43.201.27.83:8080/api/orders
// http://localhost:8080/api/orders
