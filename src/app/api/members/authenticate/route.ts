import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

import { baseURL } from '@/api/util/instance'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const requestHeaders = new Headers(req.headers)

    const res = await fetch(`${baseURL}/members/authenticate`, {
      method: 'POST',
      headers: requestHeaders,
      body: JSON.stringify(body),
    })
    const loginTokenData = await res.json()
    console.log(loginTokenData)

    if (!res.ok) {
      // throw new Error('Failed to login authenticate')
      console.log('Failed to login authenticate', res.status)
      return NextResponse.json(loginTokenData.msg)
    }
    if (!req.cookies.has('auth-token')) {
      cookies().set({
        name: 'auth-token',
        value: `${loginTokenData.data.token}`,
        httpOnly: true,
        path: 'http://localhost:3000',
      })
    }
    console.log(cookies().getAll())
    return NextResponse.json(true)
  } catch (error) {
    return NextResponse.redirect(`http://localhost:3000/signup`)
  }
}
