import { type NextRequest } from 'next/server'

import setAuthToken from '@/lib/middlewares/setAuthToken'

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/recommendations') && request.nextUrl.searchParams.has('authorization')) {
    return setAuthToken(request)
  }
}
