import { type NextRequest } from 'next/server'

import setAuthToken from '@/lib/middlewares/setAuthToken'

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/recommendations') && request.nextUrl.searchParams.has('authorization')) {
    return setAuthToken(request)
  }
  // if (request.nextUrl.pathname.startsWith('/login/connect') && request.nextUrl.searchParams.has('providerEmail')) {
  //   return setProviderInfo(request)
  // }
  // if (
  //   request.nextUrl.pathname.startsWith('/login/social-register') &&
  //   request.nextUrl.searchParams.has('providerEmail')
  // ) {
  //   return setProviderInfo(request)
  // }
}
