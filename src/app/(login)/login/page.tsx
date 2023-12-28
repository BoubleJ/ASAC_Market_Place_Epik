import React from 'react'

import KakaoLoginButton from '@/components/feature/login/kakaoLoginButton'
import LoginForm from '@/components/feature/login/loginForm'
import LoginHeader from '@/components/feature/login/loginHeader'

export default function page() {
  return (
    <section className="min-w-[360px]">
      <LoginHeader />
      <LoginForm />
      <KakaoLoginButton />
    </section>
  )
}
