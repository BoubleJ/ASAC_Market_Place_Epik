import { NextRequest, NextResponse } from 'next/server'

import isAuthentication from '@/lib/middlewares/checkAuthentication'
import setAuthToken from '@/lib/middlewares/setAuthToken'
import setProviderInfo from '@/lib/middlewares/setProviderInfo'

const protectedRoutes = [
  '/order',
  '/order-history',
  '/order-detail',
  '/order-complete',
  '/myPage',
  '/wish',
  '/add-review',
  '/edit-info',
]

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  if (pathname.startsWith('/recommendations') && request.nextUrl.searchParams.has('authToken')) {
    return setAuthToken(request)
  }
  if (pathname.startsWith('/login/connect') && request.nextUrl.searchParams.has('providerEmail')) {
    return setProviderInfo(request)
  }
  if (pathname.startsWith('/login/social-register') && request.nextUrl.searchParams.has('providerEmail')) {
    return setProviderInfo(request)
  }
  if (protectedRoutes.some((path) => pathname.startsWith(path)) && !isAuthentication(request)) {
    return NextResponse.redirect(new URL('/registration', request.nextUrl.origin))
  }
}
