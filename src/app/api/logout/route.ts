import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

import { baseURL } from '@/api/util/instance'

export async function POST(req: NextRequest) {
  try {
    const requestHeaders = new Headers(req.headers)

    const authToken = cookies().get('AUTH_TOKEN')?.value
    const hasCookies = cookies().has('AUTH_TOKEN')

    if (hasCookies) {
      requestHeaders.set('Authorization', `Bearer ${authToken}`)
    }

    const res = await fetch(`${baseURL}/logout`, {
      method: 'POST',
      headers: requestHeaders,
    })

    if (!res.ok) {
      // throw new Error('Failed to login authenticate')
      console.log('Failed to logout', res.status)
      return NextResponse.json({ msg: '로그아웃을 실패했습니다.' })
    }

    cookies().delete('AUTH_TOKEN')

    const response = await res.json()
    console.log(response)

    return NextResponse.json(response)
  } catch (error) {
    return NextResponse.json({ msg: '로그아웃을 하지 못했습니다.' })
  }
}
