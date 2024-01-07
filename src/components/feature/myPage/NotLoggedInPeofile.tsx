'use client'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function NotLoggedInPeofile() {
  const router = useRouter()
  return (
    <div className="flex flex-col justify-center items-center gap-1">
      <span>회원 가입하고</span>
      <span>다양한 헤택을 받아보세요!</span>
      <Button variant={'primary'} size={'lg'} className="my-2" onClick={() => router.replace('/login')}>
        로그인 하기
      </Button>
    </div>
  )
}
