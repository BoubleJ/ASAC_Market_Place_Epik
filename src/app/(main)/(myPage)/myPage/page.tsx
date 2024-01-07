import React from 'react'

import MyMenus from '@/components/feature/myPage/MyMenus'
import { fetchMember } from '@/api/resource/member'

import LoggedInProfile from '@/components/feature/myPage/LoggedInProfile'
import NotLoggedInPeofile from '@/components/feature/myPage/NotLoggedInPeofile'

export type memberType = { loginId: string; memberName: string; couponCount: number; wishListCount: number }

export default async function page() {
  const member = await fetchMember()
  let isLoggedIn = true
  console.log(member)
  if (member.errorMessage) {
    console.log(member.errorMessage)
    isLoggedIn = false
  }

  return (
    <>
      <div className="p-4">{isLoggedIn ? <LoggedInProfile member={member} /> : <NotLoggedInPeofile />}</div>{' '}
      <div className="w-full border-b-4 border-grayscale-50"></div>
      <MyMenus />
    </>
  )
}
