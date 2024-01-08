import { cookies } from 'next/headers'
import { type NextRequest, NextResponse } from 'next/server'

export default function setAuthToken(request: NextRequest) {
  try {
    const url = request.nextUrl.clone()
    const token = url.searchParams.get('authorization')

    if (!token) {
      return NextResponse.next()
    }

    cookies().set('Authorization', `Bearer ${token}`, {
      httpOnly: true,
      secure: true,
      path: '/',
      sameSite: 'strict',
    })

    url.pathname = '/recommendations'
    url.searchParams.delete('authorization')
    return NextResponse.redirect(url)
  } catch (error) {
    console.log('error:', error)
    throw new Error("Couldn't set authentication token")
  }
}
