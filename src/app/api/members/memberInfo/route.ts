import { NextRequest, NextResponse } from 'next/server'

import { baseURL } from '@/api/util/instance'
import { cookies } from 'next/headers'

export async function GET(req: NextRequest) {
  try {
    const requestHeaders = new Headers(req.headers)

    if (cookies().has('AUTH_TOKEN')) {
      requestHeaders.set('Authorization', `Bearer ${cookies().get('AUTH_TOKEN')?.value}`)
    }

    const res = await fetch(`${baseURL}/members/modify-member`, {
      method: 'GET',
      headers: requestHeaders,
    })

    if (!res.ok) {
      throw new Error('Failed to get member')
    }

    const response = await res.json()
    return NextResponse.json({ response })
  } catch (error) {
    return NextResponse.redirect(`http://localhost:3000/myPage`)
  }
}
