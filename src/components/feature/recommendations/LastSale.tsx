import React from 'react'

import { fetchLastSaleProducts } from '@/api/resource/reccomendation'

// import SmallCard from '@/components/common/product/smallCard'
// import { ProductType } from '@/types/product'
import LastSaleCarousel from './LastSaleCarousel'

export default async function LastSale() {
  const productList = await fetchLastSaleProducts()
  return (
    <div className="flex flex-col h-80 gap-4">
      <p className="text-headline3 ">마감세일</p>
      <LastSaleCarousel productList={productList} />
    </div>
  )
}
