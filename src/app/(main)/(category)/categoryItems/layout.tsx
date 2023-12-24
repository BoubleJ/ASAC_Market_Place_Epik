import React from 'react'

import { fetchCategory } from '@/api/resource/category'
import CategoryItemsHeader from '@/components/feature/category/categoryItems/CategoryItemsHeader'
import CategoryItemsTab from '@/components/feature/category/categoryItems/CategoryItemsTab'

export default async function CategoryItemsLayout({ children }: { children: React.ReactNode }) {
  const categories = await fetchCategory()
  return (
    <>
      <div className="fixed top-0 w-96 h-28 z-10 bg-white">
        <CategoryItemsHeader />
        <CategoryItemsTab categories={categories} />
      </div>
      <div className="pt-28">{children}</div>
    </>
  )
}
