'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'

import { fetchSearchItemsData } from '@/api/resource/search'
import SmallCard from '@/components/common/product/smallCard'
import { ContentType, ProductType } from '@/types/product'

interface ISearchedItemList {
  initialProductList: ProductType[]
  params: { categoryParams: string | null; brandParams: string | null; priceParams: string | null; searchword: string }
  totalPage: number
}

export default function SearchedItemList({ initialProductList, params, totalPage }: ISearchedItemList) {
  const [productList, setProductList] = useState<ContentType>([])
  const [page, setPage] = useState(0)

  useEffect(() => {
    setProductList(initialProductList)
  }, [initialProductList])

  useEffect(() => {
    if (page !== 0) {
      fetchSearchItemsData(params.searchword, params.categoryParams, params.brandParams, params.priceParams, page)
        .then(({ content }) => {
          setProductList((prevProductList) => [...prevProductList, ...content])
        })

        .catch((error) => {
          console.error('data fetch 실패', error)
        })
    }
  }, [page])

  const loadMore = useCallback(() => {
    console.log(page, totalPage, '!!!!!!!!!')

    if (page < totalPage - 1) {
      console.log(page, totalPage, '!!!!!!!!!!!!')
      setPage((prevPage) => prevPage + 1)
    }
  }, [page, totalPage])
  const observer = useRef<IntersectionObserver | null>(null)
  const lastProductElementRef = useCallback(
    (node: HTMLElement | null) => {
      // if (observer.current) {
      //   console.log('원래꺼 disconnect')
      //   console.log('node', node)
      //   // observer.current.disconnect()
      // }
      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            console.log(entries[0].target, 'sdfsdfsdfds')
            loadMore()
          }
        },
        {
          threshold: [0.5], //  교차 영역에 타켓 엘리먼트의 50%가 있을 때 observe가 반응.
        },
      )
      if (node) observer.current.observe(node)
    },
    [loadMore],
  )

  return (
    <>
      <div className="text-lg"></div>
      <div className="grid grid-cols-2 justify-items-center gap-3 px-5 pt-4">
        {productList.map((product: ProductType, index: number) => (
          <div
            ref={productList.length === index + 1 ? lastProductElementRef : null}
            key={product.id}
            className={`w-full px-1 ${productList.length === index + 1 ? 'bg-slate-400' : ''}`}
          >
            <SmallCard product={product} />
          </div>
        ))}
      </div>
    </>
  )
}
