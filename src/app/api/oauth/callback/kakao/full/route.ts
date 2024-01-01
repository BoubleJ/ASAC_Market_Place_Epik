import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    console.log('AUTH_TOKEN req', req.cookies.get('AUTH_TOKEN'))
    console.log('auth_token req', req.cookies.get('auth_token'))

    console.log('AUTH_TOKEN cookies', cookies().get('AUTH_TOKEN'))
    console.log('auth_token cookies', cookies().get('auth_token'))
    // const param = req.nextUrl.searchParams
    // console.log(param)
    // const token = param.get('authorization')
    // if (token) {
    //   cookies().set('Authorization', `Bearer ${token}`)
    // }
    return NextResponse.redirect('/recommendations')
  } catch (error) {}
}
