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

    console.log('route post')

    const itemId = await req.json()
    console.log(itemId.itemId, '!!!')
    // const body = await req.json()
    // console.log(requestHeaders)
    const res = await fetch(`${baseURL}/items/yeswish?itemId=${itemId.itemId}`, {
      method: 'POST',
      headers: requestHeaders,
      body: JSON.stringify(itemId),
    })
    const resoense = await res.json()
    return NextResponse.json(resoense)

    // return res
  } catch (error) {
    console.log('addwish list 에러', error)
    return NextResponse.json({ msg: 'error' })
  }
}

export const GET = async () => {
  return NextResponse.json({ message: 'Hello, Next.js Version 13!' }, { status: 200 })
}
