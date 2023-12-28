'use client'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import { fetchCategoryItems } from '@/api/resource/category'
import CommonProductList from '@/components/common/product/commonProductList'

export default function CategoryItemsList({ categoryName }: { categoryName: string }) {
  const decodeCategoryName = decodeURIComponent(categoryName).split('-')
  const mainCategory = decodeCategoryName[0]

  const subCategory = decodeCategoryName[1]

  const params = useSearchParams()

  const categoryNameParam = subCategory === '전체보기' ? mainCategory : subCategory
  const brandParams = params.get('브랜드')
  const priceParams = params.get('가격')
  const [productList, setProductList] = useState([])

  useEffect(() => {
    fetchCategoryItems(categoryNameParam, brandParams, priceParams)
      .then((data) => {
        setProductList(data.items.content)
      })
      .catch((error) => {
        console.error('상품들을 불러오기 실패', error)
      })
  }, [categoryNameParam, brandParams, priceParams])

  return (
    <div>
      {productList.length > 0 ? (
        <CommonProductList productList={productList} />
      ) : (
        <div className="p-4 text-grayscale-400">
          <p>해당 카테고리의 상품이 없습니다.</p>
        </div>
      )}
    </div>
  )
}
