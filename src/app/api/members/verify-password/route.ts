import { NextRequest, NextResponse } from 'next/server'

import { baseURL } from '@/api/util/instance'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    console.log(body)
    const requestHeaders = new Headers(req.headers)

    const res = await fetch(`${baseURL}/members/verify-password`, {
      method: 'POST',
      headers: requestHeaders,
      body: JSON.stringify(body),
    })

    if (!res.ok) {
      throw new Error('Failed to check verify social login')
    }
    const response = await res.json()
    console.log(response)
    return NextResponse.json(response)
  } catch (error) {
    return NextResponse.redirect(`http://localhost:3000/login`)
  }
}
