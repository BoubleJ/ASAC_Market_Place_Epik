'use client'
import React from 'react'

import { useModalState } from '@/components/provider/modalProvider'
import { Button } from '@/components/ui/button'
import { KakaoIcon } from '@/lib/icons'

function TestModal() {
  const state = useModalState()
  return (
    <>
      <section className="py-12 px-20 text-body-md text-center">
        <span className="">이미 </span>
        <span className="font-semibold">카카오 </span>
        <span className="">
          소셜로그인으로
          <br />
          연동되어있는 계정입니다.
          <br />
          해당 SNS로 로그인해주세요!
        </span>
      </section>
      <div className="text-body-md">
        <Button variant={'secondary'} className="w-1/2 border-none rounded-none h-14">
          새로회원가입
        </Button>
        <Button
          variant={'primary'}
          className="w-1/2 ouline-none rounded-none h-14"
          onClick={() => state.modalRef.current?.close()}
        >
          로그인
        </Button>
      </div>
    </>
  )
}

export default function KakaoLoginButton() {
  const state = useModalState()

  const handleKakaoLogin = async () => {
    // fetchKakaoLogin()

    window.location.href = `${process.env.NEXT_PUBLIC_AUTH_LOGIN}`
    // state.setModal(<TestModal />)
    // state.modalRef.current?.showModal()
  }

  return (
    <section className="">
      <div className="text-body-sm text-center py-5">
        <span className="">카카오로 </span>
        <span className="text-brand-primary-500">간편하게 시작</span>
        <span className="">하세요</span>
      </div>
      <Button variant={'kakao'} className="w-full h-12 relative" onClick={handleKakaoLogin}>
        <KakaoIcon size="1.5rem" className="absolute left-0 ml-6" />
        <span>카카오로 시작하기</span>
      </Button>
    </section>
  )
}
