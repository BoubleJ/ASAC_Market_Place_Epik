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
    const body = req.body
    const bodyFormdata = await req.formData()

    console.log('route post왔슴')
    console.log(bodyFormdata)

    console.log(bodyFormdata.get('review'), '폼데이터!')
    console.log(bodyFormdata.getAll('reviewImages'), '폼데이터!')

    const res = await fetch(`${baseURL}/reviews/create`, {
      method: 'POST',
      headers: requestHeaders,
      body: bodyFormdata,
    })
    const resoense = await res.json()
    console.log(resoense, 'ㅎㅎㅎ')
    return NextResponse.json(resoense)
  } catch (error) {
    console.log('review 등록 에러', error)
    return NextResponse.json({ msg: 'error' })
  }
}

export const GET = async () => {
  return NextResponse.json({ message: 'Hello, Next.js Version 13!' }, { status: 200 })
}
