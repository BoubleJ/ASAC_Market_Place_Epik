import { NextRequest, NextResponse } from 'next/server'

import { basePath, baseURL } from '@/api/util/instance'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const requestHeaders = new Headers(req.headers)

    const res = await fetch(`${baseURL}/members/socialRegister`, {
      method: 'POST',
      headers: requestHeaders,
      body: JSON.stringify(body),
    })

    if (!res.ok) {
      throw new Error('Failed to check login id')
    }
    const response = await res.json()
    console.log(response)
    return NextResponse.json(response)
  } catch (error) {
    return NextResponse.redirect(`${basePath}/login`)
  }
}
