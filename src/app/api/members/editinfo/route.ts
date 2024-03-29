import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

import { basePath, baseURL } from '@/api/util/instance'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const requestHeaders = new Headers(req.headers)
    requestHeaders.set('Accept', 'application/json')

    if (cookies().has('AUTH_TOKEN')) {
      requestHeaders.set('Authorization', `Bearer ${cookies().get('AUTH_TOKEN')?.value}`)
    }

    const res = await fetch(`${baseURL}/members/modify-member`, {
      method: 'POST',
      headers: requestHeaders,
      body: JSON.stringify(body),
    })

    const response = await res.json()
    if (res.status === 400) {
      return NextResponse.json({ errorMessage: response.msg })
    }
    return NextResponse.json({ response })
  } catch (error) {
    return NextResponse.redirect(`${basePath}/myPage`)
  }
}
