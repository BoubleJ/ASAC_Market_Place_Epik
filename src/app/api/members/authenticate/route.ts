import { NextRequest, NextResponse } from 'next/server'

import { baseURL } from '@/api/util/instance'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const requestHeaders = new Headers(req.headers)

    if (req.cookies.has('auth-token')) {
      requestHeaders.set('Authorization', `Bearer ${req.cookies.get('auth-token')}`)
    }

    const res = await fetch(`${baseURL}/members/authenticate`, {
      method: 'POST',
      headers: requestHeaders,
      body: JSON.stringify(body),
    })

    if (!res.ok) {
      throw new Error('Failed to login authenticate')
    }
    const loginTokenData = await res.json()

    const response = NextResponse.next()

    if (!req.cookies.has('auth-token')) {
      response.cookies.set({ name: 'auth-token', value: `${loginTokenData.data.token}`, httpOnly: true })
    }

    return response
  } catch (error) {
    return NextResponse.redirect(`/signup`)
  }
}
