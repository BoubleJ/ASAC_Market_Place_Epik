import React from 'react'

import { fetchItemDetails, fetchReviews } from '@/api/resource/items'
import ItemDetailInfo from '@/components/feature/item/ItemDetailInfo'
import ItemMainInfo from '@/components/feature/item/ItemMainInfo'
import ItemReview from '@/components/feature/item/ItemReview'

export const dynamic = 'force-dynamic'

export default async function ItemPage({ params }: { params: { itemId: number } }) {
  const itemData = await fetchItemDetails(params.itemId)
  const reviewData = await fetchReviews(params.itemId)

  return (
    <>
      {<ItemMainInfo itemId={params.itemId} itemData={itemData} />}
      {<ItemDetailInfo itemId={params.itemId} itemData={itemData} />}
      {<ItemReview itemId={params.itemId} reviewData={reviewData} />}
    </>
  )
}
