'use client'
import React from 'react'

import CommonProductList from '@/components/common/product/commonProductList'

export default function CategoryItemsList({ categoryItems }: { categoryItems: any }) {
  return (
    <div>
      {categoryItems.items.content.length > 0 ? (
        <CommonProductList productList={categoryItems.items.content} />
      ) : (
        <div className="p-4 text-grayscale-400">
          <p>해당 카테고리의 상품이 없습니다.</p>
        </div>
      )}
    </div>
  )
}
