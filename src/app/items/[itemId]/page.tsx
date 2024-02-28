import React from 'react'

import { fetchItemDetails, fetchReviews } from '@/api/resource/items'
import ItemDetailInfo from '@/components/feature/item/ItemDetailInfo'
import ItemMainInfo from '@/components/feature/item/ItemMainInfo'
import ItemReview from '@/components/feature/item/ItemReview'
import ItemTabs from '@/components/feature/item/ItemTabs'

export const dynamic = 'force-dynamic'

export default async function ItemPage({
  params,
  searchParams,
}: {
  params: { itemId: number }
  searchParams: { tab: string | null }
}) {
  const itemData = await fetchItemDetails(params.itemId)
  console.log(itemData)
  const reviewData = await fetchReviews(params.itemId)

  return (
    <>
      <ItemTabs itemId={params.itemId} />

      {<ItemMainInfo tabParam={searchParams.tab} itemData={itemData} />}
      {<ItemDetailInfo tabParam={searchParams.tab} itemData={itemData} />}
      {<ItemReview itemId={params.itemId} tabParam={searchParams.tab} reviewData={reviewData} />}
    </>
  )
}
