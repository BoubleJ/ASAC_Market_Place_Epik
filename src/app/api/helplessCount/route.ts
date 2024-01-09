import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

import { baseURL } from '@/api/util/instance'

export async function POST(req: NextRequest) {
  try {
    const requestHeaders = new Headers(req.headers)

    if (cookies().has('AUTH_TOKEN')) {
      requestHeaders.set('Authorization', `Bearer ${cookies().get('AUTH_TOKEN')?.value}`)
    }
    console.log('route post helpless')

    const helplessParams = await req.json()
    console.log(helplessParams, '!!!')
    // const body = await req.json()
    // console.log(requestHeaders)
    const res = await fetch(
      `${baseURL}/reviews/helpless?itemId=${helplessParams.itemId}&reviewId=${helplessParams.reviewId}`,
      {
        method: 'POST',
        headers: requestHeaders,
        // headers: commonHeader,
        body: JSON.stringify(helplessParams),
      },
    )
    const resoense = await res.json()
    console.log(resoense, '!!!!!!!!!!!')

    return NextResponse.json(resoense)

    // return res
  } catch (error) {
    console.log('delete 에러', error)
    return NextResponse.json({ msg: 'error' })
  }
}

export const GET = async () => {
  return NextResponse.json({ message: 'Hello, Next.js Version 13!' }, { status: 200 })
}
