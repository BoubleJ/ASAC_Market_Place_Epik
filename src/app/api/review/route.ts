import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

import { baseURL } from '@/api/util/instance'

export async function POST(req: Request) {
  const itemId = await req.json()
  const authToken = cookies().get('AUTH_TOKEN')?.value
  const hasCookies = cookies().has('AUTH_TOKEN')

  try {
    const requestHeaders = new Headers(req.headers)
    // console.log('cookie', cookies().getAll())
    if (hasCookies) {
      requestHeaders.set('Authorization', `Bearer ${authToken}`)
    }
    console.log(itemId, 'ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ')
    console.log(hasCookies, 'ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ')

    const res = await fetch(`${baseURL}/items/reviews?itemId=${33}`, {
      method: 'GET',
      headers: requestHeaders,
      // headers: commonHeader,
    })
    const resoense = await res.json()
    return NextResponse.json(resoense)

    // return res
  } catch (error) {
    console.log('reviewList에러', error)
    return NextResponse.json({ msg: 'error' })
  }
}

// export const GET = async () => {
//   return NextResponse.json({ message: 'Hello, Next.js Version 13!' }, { status: 200 })
// }
