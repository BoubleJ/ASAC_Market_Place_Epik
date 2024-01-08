import { cookies } from 'next/headers'

import { baseURL, commonHeader } from '@/api/util/instance'

export async function fetchMember() {
  if (cookies().has('AUTH_TOKEN')) {
    commonHeader.set('Authorization', `Bearer ${cookies().get('AUTH_TOKEN')?.value}`)
  }
  const res = await fetch(`${baseURL}/members/mypage`, {
    method: 'GET',
    headers: commonHeader,
  })
  const member = await res.json()
  if (res.status === 404) {
    return { errorMessage: member.msg }
  }
  return member.data
}

export async function fetchMemberInfo(loginId: string) {
  const res = await fetch(`${baseURL}/members/modify-member?loginId=${loginId}`, {
    headers: commonHeader,
  })
  const memberInfo = await res.json()
  if (res.status === 404) {
    return res.text()
  }
  return memberInfo.data
}
