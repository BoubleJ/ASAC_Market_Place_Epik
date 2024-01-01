import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const param = req.nextUrl.searchParams
    console.log(param)
    const token = param.get('authorization')
    if (token) {
      cookies().set('Authorization', `Bearer ${token}`)
    }

    return NextResponse.redirect('/login/social-register')
  } catch (error) {}
}
