import { type NextRequest, NextResponse } from 'next/server'

import { basePath } from '@/api/util/instance'

export default async function setAuthToken(request: NextRequest) {
  try {
    const url = request.nextUrl.clone()

    const token = url.searchParams.get('authToken')

    if (!token) {
      return NextResponse.next()
    }
    url.pathname = '/recommendations'
    url.searchParams.delete('authToken')

    const response = NextResponse.redirect(url, { status: 302 })

    response.cookies.set({
      name: 'AUTH_TOKEN',
      value: token!,
      httpOnly: true,
      path: '/',
    })
    return response
  } catch (error) {
    console.log('Could not set authentication token:', error)
    return NextResponse.redirect(`${basePath}/login`, { status: 302 })
  }
}
