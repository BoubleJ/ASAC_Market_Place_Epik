import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

import { basePath, baseURL } from '@/api/util/instance'

export async function GET(req: NextRequest) {
  try {
    const requestHeaders = new Headers()
    const authToken = cookies().get('AUTH_TOKEN')?.value
    const hasCookies = cookies().has('AUTH_TOKEN')

    if (hasCookies) {
      requestHeaders.set('Authorization', `Bearer ${authToken}`)
    }

    const res = await fetch(`${baseURL}/cart`, {
      method: 'GET',
      headers: requestHeaders,
    })
    if (!res.ok) {
      // throw new Error('Failed to login authenticate')
      console.log('Failed to get Cart', res.status)
      const response = await res.json()
      return NextResponse.json(response)
    }
    const path = req.nextUrl.searchParams.get('path') || `${basePath}/api/cart`
    revalidatePath(path)

    const response = await res.json()
    return NextResponse.json(response)
  } catch (error) {
    return NextResponse.json({ msg: '장바구니를 불러오지 못 했습니다.' })
  }
}
