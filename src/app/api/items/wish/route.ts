import { NextRequest, NextResponse } from 'next/server'

import { baseURL, commonHeader } from '@/api/util/instance'

export async function POST(req: NextRequest) {
  try {
    const requestHeaders = new Headers(req.headers)

    if (req.cookies.has('auth-token')) {
      requestHeaders.set('Authorization', `${req.cookies.get('auth-token')}`)
    }
    console.log('route post')
    // console.log('바아디', await req.json())
    // console.log(requestHeaders, '리키스트 헤더')
    // console.log(req.headers, 'req header!!!!!!!')
    const itemId = await req.json()
    console.log(itemId.itemId, '!!!')
    const res = await fetch(`${baseURL}/items/yeswish?itemId=${itemId.itemId}`, {
      method: 'POST',
      // headers: requestHeaders,
      headers: commonHeader,
      body: JSON.stringify(req.body),
    })
    const resoense = await res.json()
    console.log(resoense, 'ㅎㅎㅎ')
    return NextResponse.json(resoense)

    // return res
  } catch (error) {
    console.log('ㅔㅇㅔ러', error)
    return NextResponse.redirect(`${baseURL}/items/19`)
  }
}

export const GET = async () => {
  return NextResponse.json({ message: 'Hello, Next.js Version 13!' }, { status: 200 })
}
