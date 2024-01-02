import { type NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers)
  if (request.cookies.has('AUTH_TOKEN')) {
    console.log(request.cookies.get('AUTH_TOKEN'))
    requestHeaders.set('Authorization', `Bearer ${request.cookies.get('AUTH_TOKEN')?.value}`)
  }
  const response = NextResponse.next()
  response
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
}
