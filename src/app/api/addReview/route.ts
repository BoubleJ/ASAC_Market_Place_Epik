import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

import { baseURL } from '@/api/util/instance'

export async function POST(req: NextRequest) {
  try {
    const requestHeaders = new Headers(req.headers)
    console.log('cookie', cookies().getAll())

    if (cookies().has('AUTH_TOKEN')) {
      requestHeaders.set('Authorization', `Bearer ${cookies().get('AUTH_TOKEN')?.value}`)
    }

    // requestHeaders.set('Accept', 'multipart/form-data')
    const bodyFormdata = await req.formData()
    // const b = await req.body

    console.log('route post왔슴')
    console.log(bodyFormdata)

    console.log(bodyFormdata.get('review'), '폼데이터!')
    console.log(bodyFormdata.getAll('reviewImages'), '폼데이터!')
    console.log(cookies().has('AUTH_TOKEN'), '쿠키')
    console.log(requestHeaders, '리퀴스트 헤에에엥더')

    const res = await fetch(`${baseURL}/reviews/create`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${cookies().get('AUTH_TOKEN')?.value}` },
      body: bodyFormdata,
    })
    const resoense = await res.json()
    console.log('review 등록 성공', resoense)
    console.log('review 등록 성공', resoense)

    return NextResponse.json(resoense)
  } catch (error) {
    console.log('review 등록 에러', error)
    return NextResponse.json({ errorMessage: '리뷰등록 실패' })
  }
}

export const GET = async () => {
  return NextResponse.json({ message: 'Hello, Next.js Version 13!' }, { status: 200 })
}
