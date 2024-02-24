import React, { useCallback, useRef } from 'react'

import SmallCard from '@/components/common/product/smallCard'
import { ProductType } from '@/types/product'

interface CommonProductListProps {
  productList: ProductType[]
  loadMore: () => void
}

export default function CommonProductList({ productList, loadMore }: CommonProductListProps) {
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
          threshold: [0.5], //  교차 영역에 타켓 엘리먼트의 100%가 있을 때 observe가 반응.
        },
      )
      if (node) observer.current.observe(node)
    },
    [loadMore],
  )

  return (
    <div className="grid grid-cols-2 justify-items-center gap-3 px-5 pt-4">
      {/* {productList.map((product: ProductType, index: number) => (
        <div key={index}>{product.id}</div>
      ))} */}
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
  )
}
