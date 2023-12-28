import React from 'react'

import WishHeader from '@/components/feature/myPage/wish/WishHeader'

export default function WishLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="fixed top-0 w-96 border-">
        <WishHeader />
      </div>
      <div className="pt-20">{children}</div>
    </>
  )
}
