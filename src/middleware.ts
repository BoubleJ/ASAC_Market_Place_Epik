import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

import setAuthToken from '@/lib/middlewares/setAuthToken'
import setProviderInfo from '@/lib/middlewares/setProviderInfo'

import { basePath } from './api/util/instance'

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/recommendations') && request.nextUrl.searchParams.has('authToken')) {
    return setAuthToken(request)
  }
  if (request.nextUrl.pathname.startsWith('/login/connect') && request.nextUrl.searchParams.has('providerEmail')) {
    return setProviderInfo(request)
  }
  if (
    request.nextUrl.pathname.startsWith('/login/social-register') &&
    request.nextUrl.searchParams.has('providerEmail')
  ) {
    return setProviderInfo(request)
  }
  if (request.nextUrl.pathname.startsWith(`/myPage`) && !cookies().has('AUTH_TOKEN')) {
    return NextResponse.redirect(`${basePath}/registration`)
    // if()
  }
}
