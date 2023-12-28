import React from 'react'

import ConnectForm from '@/components/feature/connect/connectForm'
import ConnectHeader from '@/components/feature/connect/connectHeader'
import ConnectInfo from '@/components/feature/connect/connectInfo'

export default function SnsConnectPage() {
  return (
    <section className="min-w-[360px]">
      <ConnectHeader />
      <ConnectInfo />
      <ConnectForm />
    </section>
  )
}
