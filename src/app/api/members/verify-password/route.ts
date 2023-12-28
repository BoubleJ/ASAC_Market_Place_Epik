import { NextRequest, NextResponse } from 'next/server'

import { baseURL } from '@/api/util/instance'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const requestHeaders = new Headers(req.headers)

    const res = await fetch(`${baseURL}/members/verify-password`, {
      method: 'POST',
      headers: requestHeaders,
      body: JSON.stringify(body),
    })

    if (!res.ok) {
      throw new Error('Failed to check verify social login')
    }

    return NextResponse.json(res)
  } catch (error) {
    return NextResponse.redirect(`/login`)
  }
}
