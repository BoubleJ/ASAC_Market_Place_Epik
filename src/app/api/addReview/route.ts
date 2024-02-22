import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

import { baseURL } from '@/api/util/instance'

export async function POST(req: NextRequest) {
  try {
    console.log('cookie', cookies().getAll())

    const body = await req.json()

    console.log('route post왔슴')

    const res = await fetch(`${baseURL}/reviews/create`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${cookies().get('AUTH_TOKEN')?.value}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    if (!res.ok) {
      console.log('Failed to get review', res.status)
      const msg = await res.json()
      return NextResponse.json({ msg })
    }
    const response = await res.json()
    console.log(response)
    console.log('토큰', cookies().get('AUTH_TOKEN')?.value)
    console.log(body)
    console.log('바디', JSON.stringify(body))
    console.log('review 등록 성공', response)

    return NextResponse.json(response)
  } catch (error) {
    console.log('review 등록 에러', error)
    return NextResponse.json({ errorMessage: '리뷰등록 실패' })
  }
}

export const GET = async () => {
  return NextResponse.json({ message: 'Hello, Next.js Version 13!' }, { status: 200 })
}
