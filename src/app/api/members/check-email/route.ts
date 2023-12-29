import { NextRequest, NextResponse } from 'next/server'

import { baseURL } from '@/api/util/instance'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const requestHeaders = new Headers(req.headers)

    const res = await fetch(`${baseURL}/members/check-email`, {
      method: 'POST',
      headers: requestHeaders,
      body: JSON.stringify(body),
    })

    if (!res.ok) {
      throw new Error('Failed to check email')
    }

    const response = await res.json()
    return NextResponse.json(response.data)
  } catch (error) {
    return NextResponse.redirect(`http://localhost:3000/signup`)
  }
}
