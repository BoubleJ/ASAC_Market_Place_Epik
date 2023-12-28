import { NextRequest, NextResponse } from 'next/server'

import { baseURL } from '@/api/util/instance'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const requestHeaders = new Headers(req.headers)

    if (req.cookies.has('auth-token')) {
      requestHeaders.set('Authorization', `Bearer ${req.cookies.get('auth-token')}`)
    }

    const res = await fetch(`${baseURL}/members/signup`, {
      method: 'POST',
      headers: requestHeaders,
      body: JSON.stringify(body),
    })

    if (!res.ok) {
      throw new Error('Failed to signup')
    }
    // console.log('req cookie', req.cookies.getAll())
    // console.log('req header', requestHeaders)
    return NextResponse.json(res)
  } catch (error) {
    return NextResponse.redirect(`/signup`)
  }
}
