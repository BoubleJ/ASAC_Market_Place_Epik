import React from 'react'

import { memberType } from '@/app/(main)/(myPage)/myPage/page'
import { Button } from '@/components/ui/button'

export default function LoggedInProfile({ member }: { member: memberType }) {
  console.log(member.memberGrade === 'BRONZE')

  return (
    <div>
      <div className="flex items-center gap-4 ">
        <div
          className={`border-tier-color-${member.memberGrade} text-tier-color-${member.memberGrade} rounded-lg border-2 p-4 text-title-md`}
        >
          {member.memberGrade}
        </div>
        <span className="text-title-md">{member?.memberName} 님</span>
      </div>
      <div className="mt-4 flex justify-around gap-2 text-center text-button-sm">
        <Button variant={'gray'} size={'lg'}>
          전체등급 보기
        </Button>
        <Button variant={'gray'} size={'lg'}>
          전체등급 보기
        </Button>{' '}
      </div>
    </div>
  )
}
