import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

import { baseURL } from '@/api/util/instance'

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

    if (!res.ok) {
      throw new Error('Failed to edit Info')
    }

    const response = await res.json()
    return NextResponse.json({ response })
  } catch (error) {
    return NextResponse.redirect(`http://localhost:3000/myPage`)
  }
}
