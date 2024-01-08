import React from 'react'

import { fetchLastSaleProducts } from '@/api/resource/reccomendation'
import SmallCard from '@/components/common/product/smallCard'
import { ProductType } from '@/types/product'

export default async function LastSale() {
  const productList = await fetchLastSaleProducts()
  return (
    <div className="flex flex-col h-80 gap-4">
      <p className="text-headline3 ">마감세일</p>
      <div className="flex items-center overflow-x-scroll overflow-y-hidden h-[271px] gap-4 no-scrollbar">
        {productList.map((product: ProductType) => (
          <div key={product.id} className="flex-none w-32 h-full">
            <SmallCard product={product} />
          </div>
        ))}
      </div>
    </div>
  )
}
