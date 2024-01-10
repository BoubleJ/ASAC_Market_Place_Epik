import React from 'react'

import HomeHeader from '@/components/feature/home/HomeHeader'

export default function RegistrationLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="fixed w-96 top-0 h-16">
        <HomeHeader />
      </div>
      <div className="w-full mt-20 flex flex-col justify-center items-center">{children}</div>
    </>
  )
}
