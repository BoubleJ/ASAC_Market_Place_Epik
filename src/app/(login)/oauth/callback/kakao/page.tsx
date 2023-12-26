'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export default function KakaoRedirectPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const authCode = searchParams.get('code')

  const handleAuthCode = async (code: string) => {
    try {
      await fetch(`/api/oauth/callback/kakao/code?=${code}`, {
        method: 'POST',
      })
      router.push('/')
    } catch (error) {
      router.push('/')
    }
  }

  useEffect(() => {
    if (authCode) {
      //handler call
      handleAuthCode(authCode)
    }
  }, [authCode])
  return <div>로그인중입니다...</div>
}
