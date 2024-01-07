import React from 'react'

import { memberType } from '@/app/(main)/(myPage)/myPage/page'
import { Button } from '@/components/ui/button'

export default function LoggedInProfile({ member }: { member: memberType }) {
  return (
    <div>
      <div className="flex gap-4 items-center ">
        <div className="border-2 border-brand-primary-400 rounded-lg p-4 text-brand-primary-500 text-title-md">
          일반
        </div>
        <span className="text-title-md">{member?.memberName} 님</span>
      </div>
      <div className="flex mt-4 justify-around gap-2 text-button-sm text-center">
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
