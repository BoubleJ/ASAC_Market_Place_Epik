import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

import { baseURL } from '@/api/util/instance'

export async function GET(req: NextRequest) {
  try {
    const requestHeaders = new Headers(req.headers)
    // console.log('cookie', cookies().getAll())
    console.log('---------!----------!--------')
    if (cookies().has('auth-token')) {
      requestHeaders.set('Authorization', `Bearer ${cookies().get('auth-token')?.value}`)
    }
    console.log('찜목록 !! Authorization', requestHeaders)

    // const body = await req.json()
    // console.log(requestHeaders)
    const res = await fetch(`${baseURL}/members/mypage/wishlist`, {
      method: 'GET',
      headers: requestHeaders,
      // headers: commonHeader,
    })
    const resoense = await res.json()
    console.log(resoense, 'ㅎㅎㅎ')
    return NextResponse.json(resoense)

    // return res
  } catch (error) {
    console.log('ㅔㅇㅔ러', error)
    return NextResponse.json({ msg: 'error' })
  }
}

// export const GET = async () => {
//   return NextResponse.json({ message: 'Hello, Next.js Version 13!' }, { status: 200 })
// }
