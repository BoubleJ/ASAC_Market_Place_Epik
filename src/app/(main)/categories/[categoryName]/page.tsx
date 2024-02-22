'use client'
import React, { useEffect, useState } from 'react'

import { fetchCategoryItems } from '@/api/resource/category'
import CategoryFilter from '@/components/feature/category/categoryItem/CategoryFilter'
import CategoryItemsList from '@/components/feature/category/categoryItem/CategoryItemsList'
import { ContentType } from '@/types/product'

export default function CategoryItemsPage({
  params,
  searchParams,
}: {
  params: { categoryName: string }
  searchParams: {
    ['브랜드']: string | null
    ['가격']: string | null
    ['page']: number | null
  }
}) {
  const [productList, setProductList] = useState<ContentType>([])
  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  console.log('Aarooooooooon  : in page', searchParams)
  const decodedcategoryName = decodeURIComponent(params.categoryName)

  const decodeCategoryName = decodedcategoryName.split('-')
  const mainCategory = decodeCategoryName[0]
  const subCategory = decodeCategoryName[1]

  const categoryNameParam = subCategory === '전체보기' ? mainCategory : subCategory
  const brandParams = searchParams?.['브랜드']
  const priceParams = searchParams?.['가격']
  // --------------------------
  useEffect(() => {
    fetchCategoryItems(categoryNameParam, brandParams, priceParams, page)
      .then(({ content, totalPages }) => {
        // console.log('뭐가 바뀜??', searchword, categoryParams, brandParams, priceParams, page)
        console.log('콘텐트임ㅁㅁ!!!!!!!', content)
        // 왜 같은거 두번????????/
        setProductList((prevProductList) => [...prevProductList, ...content])

        // console.log()
        setTotalPages(totalPages)
        // setIsLoading(false)
      })
      //   setProductList((prevProductList) => {
      //     const newProductList = [...prevProductList]
      //     content.forEach((item: any) => {
      //       if (!newProductList.find((product) => product.id === item.id)) {
      //         console.log('같은거 : ', item)
      //         newProductList.push(item)
      //       }
      //     })
      //     return newProductList
      //   })
      //   setTotalPages(totalPages)
      //   console.log('!!!!!!!!패치', totalPages)
      // })
      .catch((error) => {
        console.error('data fetch 실패', error)
      })
  }, [categoryNameParam, brandParams, priceParams, page])
  const loadMore = () => {
    if (page < totalPages - 1) {
      console.log(page, totalPages, '!!!!!!!!!!!!')
      setPage((prevPage) => prevPage + 1)
    }
  }
  // ----------------------------------------
  // const categoryItem = await fetchCategoryItems(categoryNameParam, brandParams, priceParams)
  // console.log(categoryItem.items.content.length)

  return (
    <div className="pt-28">
      <CategoryFilter itemLength={productList.length} categoryNameParam={categoryNameParam} />
      <div>
        <CategoryItemsList categoryItems={productList} loadMore={loadMore} />
      </div>
    </div>
  )
}
