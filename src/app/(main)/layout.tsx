import React from 'react'

import MainBottomTab from '@/components/feature/main/MainBottomTab'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative z-10">
      <div className="pb-14"> {children}</div>
      <MainBottomTab />
    </section>
  )
}
