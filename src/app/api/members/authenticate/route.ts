import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

import { basePath, baseURL } from '@/api/util/instance'

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

    if (!res.ok) {
      // throw new Error('Failed to login authenticate')
      console.log('Failed to login authenticate', res.status)
      return NextResponse.json(loginTokenData.msg)
    }
    // const isAuthToken = cookies().has('AUTH_TOKEN')

    // if (!isAuthToken) {
    cookies().set({
      name: 'AUTH_TOKEN',
      value: `${loginTokenData.data.token}`,
      httpOnly: true,
      path: '/',
    })
    // }
    console.log('authenticate route.ts:', cookies().getAll())
    return NextResponse.json(true)
  } catch (error) {
    return NextResponse.redirect(`${basePath}/signup`)
  }
}
