import React from 'react'

import SocialRegisterForm from '@/components/feature/social-register/socialRegisterForm'
import SocialRegisterHeader from '@/components/feature/social-register/socialRegisterHeader'

export default function SnsConnectPage() {
  return (
    <section className="min-w-[360px]">
      <SocialRegisterHeader />
      <SocialRegisterForm />
    </section>
  )
}
