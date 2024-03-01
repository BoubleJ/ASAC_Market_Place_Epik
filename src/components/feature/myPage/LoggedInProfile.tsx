'use client'
import React, { useState } from 'react'

import { memberType } from '@/app/(main)/(myPage)/myPage/page'
import { Button } from '@/components/ui/button'

export default function LoggedInProfile({ member }: { member: memberType }) {
  const [showBox, setShowBox] = useState(false)
  return (
    <div className="relative">
      <div className="flex items-center gap-4 ">
        <div
          className={`border-tier-color-${member.memberGrade} text-tier-color-${member.memberGrade} rounded-lg border-2 p-4 text-title-md`}
        >
          {member.memberGrade}
        </div>
        <span className="text-title-md">{member?.memberName} 님</span>
      </div>
      <div className="mt-4 flex justify-around gap-2 text-center text-button-sm">
        <Button
          variant={'gray'}
          size={'lg'}
          onMouseEnter={() => setShowBox(true)}
          onMouseLeave={() => setShowBox(false)}
        >
          전체등급 보기
        </Button>
        <Button
          variant={'gray'}
          size={'lg'}
          onMouseEnter={() => setShowBox(true)}
          onMouseLeave={() => setShowBox(false)}
        >
          전체등급 보기
        </Button>
      </div>

      {showBox && (
        <div className="absolute z-20 mt-2 w-full rounded-lg border-2 border-gray-950 bg-white  p-2">
          <p className="mb-2  text-body-lg">등급별 충족조건</p>
          <p className="text-sm text-black">• BRONZE : 10,000원 ~ 100,000원 결제 시</p>
          <p className="text-sm text-black">• SILVER : 100,000원 ~ 200,000원 결제 시</p>
          <p className="text-sm text-black">• GOLD : 200,000원 ~ 300,000원 결제 시</p>
          <p className="text-sm text-black">• PLATINUM : 400,000원 ~ 400,000원 결제 시</p>
          <p className="text-sm text-black">• DIAMOND : 40,000원 ~ 500,000원 결제 시</p>
        </div>
      )}
    </div>
  )
}
