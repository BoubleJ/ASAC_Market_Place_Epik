import { cookies } from 'next/headers'
import React from 'react'

import { baseLocalURL, commonHeader } from '@/api/util/instance'
import WishedItem from '@/components/feature/myPage/wish/WishedItem'

async function fetchMember() {
  if (cookies().has('auth-token')) {
    commonHeader.set('Authorization', `Bearer ${cookies().get('auth-token')?.value}`)
  }
  const res = await fetch(`${baseLocalURL}/members/mypage`, {
    method: 'GET',
    headers: commonHeader,
    // headers: commonHeader,
  })
  if (!res.ok) {
    throw Error('fail to fatch member!')
  }
  return await res.json()
}

async function fetchWishList() {
  if (cookies().has('auth-token')) {
    commonHeader.set('Authorization', `Bearer ${cookies().get('auth-token')?.value}`)
  }
  const res = await fetch(`${baseLocalURL}/members/mypage`, {
    method: 'GET',
    headers: commonHeader,
    // headers: commonHeader,
  })
  if (!res.ok) {
    throw Error('fail to fatch member!')
  }
  return await res.json()
}

export default async function WishPage() {
  const resoense = await fetchMember()

  return <WishedItem loginId={resoense.data.loginId} />
}
