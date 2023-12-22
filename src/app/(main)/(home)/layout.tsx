import React from 'react'

import HomeHeader from '@/components/feature/home/HomeHeader'
import HomeTabs from '@/components/feature/home/HomeTabs'

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative min-h-screen">
      <HomeHeader />
      <HomeTabs />
      <div className="min-h-scree pt-24">{children}</div>
    </section>
  )
}
