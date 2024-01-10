'use client'
import { useSearchParams } from 'next/navigation'
import React from 'react'

import ItemDetailInfo from '@/components/feature/item/ItemDetailInfo'
import ItemMainInfo from '@/components/feature/item/ItemMainInfo'
import ItemReview from '@/components/feature/item/ItemReview'

export default function ItemPage({ params }: { params: { itemId: number } }) {
  const tab = useSearchParams().get('tab')

  return (
    <>
      {tab === null && <ItemMainInfo itemId={params.itemId} />}
      {tab === 'detail' && <ItemDetailInfo itemId={params.itemId} />}
      {tab === 'review' && <ItemReview itemId={params.itemId} />}
    </>
  )
}