import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  request.cookies.set({ name: 'auth-token', value: 'testAuthtoken@@@@@@' })
  // Clone the request headers
  // You can modify them with headers API: https://developer.mozilla.org/en-US/docs/Web/API/Headers
  const requestHeaders = new Headers(request.headers)

  if (request.cookies.has('auth-token')) {
    requestHeaders.set('Authorization', `${request.cookies.get('auth-token')}`)
  }

  // Add new request headers
  requestHeaders.set('x-hello-from-middleware1', 'hello')
  requestHeaders.set('x-hello-from-middleware2', 'world!')

  // Update an existing request header
  requestHeaders.set('user-agent', 'New User Agent overriden by middleware!')

  // Delete an existing request header
  requestHeaders.delete('x-from-client')

  // console.log('cookies', request.cookies.getAll())
  // console.log('request header', requestHeaders.values())

  // You can also set request headers in NextResponse.rewrite
  return NextResponse.next({
    request: {
      // New request headers
      headers: requestHeaders,
    },
  })
}
