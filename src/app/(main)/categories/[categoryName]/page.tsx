import React from 'react'

import { fetchCategoryItems } from '@/api/resource/category'
import CategoryFilter from '@/components/feature/category/categoryItem/CategoryFilter'
import CategoryItemsList from '@/components/feature/category/categoryItem/CategoryItemsList'

export default async function CategoryItemsPage({
  params,
  searchParams,
}: {
  params: { categoryName: string }
  searchParams: { [key: string]: string | null }
}) {
  console.log('Aarooooooooon 2 : in page', searchParams)
  console.log('Aarooooooooon 2 in page:', searchParams?.['브랜드'])
  const decodedcategoryName = decodeURIComponent(params.categoryName)

  const decodeCategoryName = decodedcategoryName.split('-')
  const mainCategory = decodeCategoryName[0]

  const subCategory = decodeCategoryName[1]

  const categoryNameParam = subCategory === '전체보기' ? mainCategory : subCategory
  const brandParams = searchParams?.['브랜드']
  const priceParams = searchParams?.['가격']

  const categoryItem = await fetchCategoryItems(categoryNameParam, brandParams, priceParams)
  console.log(categoryItem.items.content.length)
  return (
    <div className="pt-28">
      <CategoryFilter itemLength={categoryItem.items.content.length} />
      <div>
        <CategoryItemsList categoryItems={categoryItem} />
      </div>
    </div>
  )
}
