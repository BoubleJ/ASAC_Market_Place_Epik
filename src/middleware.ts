import { type NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // const requestHeaders = new Headers(request.headers)
  // if (request.cookies.has('auth-token')) {
  //   console.log(request.cookies.get('auth-token'))
  //   requestHeaders.set('Authorization', `Bearer ${request.cookies.get('auth-token')?.value}`)
  // }
  // const response = NextResponse.next()
  // response
  // return NextResponse.next({
  //   request: {
  //     headers: requestHeaders,
  //   },
  // })
}
