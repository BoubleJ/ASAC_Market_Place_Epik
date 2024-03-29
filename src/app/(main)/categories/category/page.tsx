import React from 'react'

import { fetchCategory } from '@/api/resource/category'
import CategoryAccordion from '@/components/feature/category/CategoryAccordion'
// import categoryData from '@/../public/category2.json'

// export const runtime = 'edge'
export const dynamic = 'force-dynamic'

export default async function page() {
  const category = await fetchCategory()
  return (
    <>
      <CategoryAccordion category={category} />
    </>
  )
}
