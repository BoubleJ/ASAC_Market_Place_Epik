import { NextRequest, NextResponse } from 'next/server'

import { baseURL } from '@/api/util/instance'

export async function POST(req: NextRequest) {
  try {
    const requestHeaders = new Headers(req.headers)

    const res = await fetch(`${baseURL}/members/mypage`, {
      method: 'GET',
      headers: requestHeaders,
    })

    if (!res.ok) {
      throw new Error('fail to get member data')
    }

    const response = await res.json()
    return NextResponse.json(response.data)
  } catch (error) {
    return NextResponse.redirect(`http://localhost:3000/myPage`)
  }
}
