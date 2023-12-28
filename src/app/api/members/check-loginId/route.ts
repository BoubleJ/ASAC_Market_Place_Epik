import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const requestHeaders = new Headers(req.headers)

    if (req.cookies.has('auth-token')) {
      requestHeaders.set('Authorization', `${req.cookies.get('auth-token')}`)
    }

    console.log('req cookie', req.cookies.getAll())
    console.log('req header', requestHeaders)
    return NextResponse.json({ cookies: `${req.cookies.getAll()}`, reqheader: `${requestHeaders}` })
  } catch (error) {
    return NextResponse.redirect(`/login`)
  }
}
