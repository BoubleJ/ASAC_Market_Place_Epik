import React from 'react'

import CategoryHeader from '@/components/feature/category/CategoryHeader'

export default function Categorylayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="w-96 fixed top-0">
        <CategoryHeader />
      </div>
      <div className="pt-20">{children}</div>
    </>
  )
}
