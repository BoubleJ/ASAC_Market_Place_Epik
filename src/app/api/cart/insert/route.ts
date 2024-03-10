import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

import { baseURL } from '@/api/util/instance'
// import { rateLimit } from '@/lib/middlewares/rateLimit'

// const limiter = rateLimit()

export async function POST(req: NextRequest) {
  const authToken = cookies().get('AUTH_TOKEN')?.value
  const hasCookies = cookies().has('AUTH_TOKEN')
  // const clientIp = req.ip || 'IP_NOT_FOUND'

  // try {
  //   await limiter.check(req, 3, clientIp)
  // } catch (error) {
  //   return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 })
  // }

  try {
    const itemId = req.nextUrl.searchParams.get('itemId')
    // const requestHeaders = new Headers(req.headers)
    const requestHeaders = new Headers()

    if (!hasCookies) {
      return NextResponse.json({ msg: '로그인이 필요한 서비스입니다.' })
    }

    requestHeaders.set('Authorization', `Bearer ${authToken}`)

    const res = await fetch(`${baseURL}/cart/insert?itemId=${itemId}`, {
      method: 'POST',
      headers: requestHeaders,
    })

    if (!res.ok) {
      // throw new Error('Failed to login authenticate')
      console.log('Failed to insert item Cart', res.status)
      const response = await res.json()
      return NextResponse.json(response)
    }

    const response = await res.json()
    console.log(response)
    return NextResponse.json(response)
  } catch (error) {
    console.log('cart insert error :', error)
    return NextResponse.json({ msg: '상품을 장바구니에 추가하지 못했습니다.' })
  }
}
