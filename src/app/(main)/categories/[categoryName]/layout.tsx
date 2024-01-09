import React from 'react'

import { fetchCategory } from '@/api/resource/category'
import CategoryFilter from '@/components/feature/category/categoryItem/CategoryFilter'
import CategoryItemsHeader from '@/components/feature/category/categoryItem/CategoryItemsHeader'
import CategoryItemsTab from '@/components/feature/category/categoryItem/CategoryItemsTab'

export default async function CategoryItemsLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { categoryName: string }
}) {
  const categories = await fetchCategory()

  const categoryName = decodeURIComponent(params.categoryName).split('-')
  const mainCategory = categoryName[0]

  const subCategory = categoryName[1]

  return (
    <>
      <div className="fixed top-0 w-96 h-28 z-10 bg-white">
        <CategoryItemsHeader mainCategory={mainCategory} />
        <CategoryItemsTab categories={categories} mainCategory={mainCategory} subCategory={subCategory} />
      </div>

      <div className="pt-28">
        <CategoryFilter />

        {children}
      </div>
    </>
  )
}
