import React from 'react'

import { fetchMember, fetchMemberInfo } from '@/api/resource/member'
import EditInfoForm from '@/components/feature/editInfo/EditInfoForm'

export type currentMemberInfoType = {
  loginId: string
  memberName: string
  email: string
  phoneNumber: string
}

export default async function EditMemberPage() {
  const member = await fetchMember()
  const currentMemberInfo = await fetchMemberInfo(member.loginId)
  // if (currentMember.errorMessage) {
  //   openCheckModal(currentMember.errorMessage)
  //   return
  // }
  console.log(member)
  return <EditInfoForm currentMemberInfo={currentMemberInfo} />
}
