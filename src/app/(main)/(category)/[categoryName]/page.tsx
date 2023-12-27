import React from 'react'

import CategoryItemsList from '@/components/feature/category/categoryItem/CategoryItemsList'

export default function CategoryItemsPage({ params }: { params: { categoryName: string } }) {
  const decodedcategoryName = decodeURIComponent(params.categoryName)

  return (
    <div>
      {decodedcategoryName} <CategoryItemsList categoryName={params.categoryName} />
    </div>
  )
}
