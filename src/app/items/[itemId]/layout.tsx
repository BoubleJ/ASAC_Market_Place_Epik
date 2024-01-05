import { cookies } from 'next/headers'

import { convertItemDetailToProduct } from '@/api/service/item'
// import { fetchItemDetails } from '@/api/resource/items'
import { baseLocalURL, commonHeader } from '@/api/util/instance'
import BottomTab from '@/components/feature/item/BottomTab'
import ItemHeader from '@/components/feature/item/ItemHeader'
import ItemTabs from '@/components/feature/item/ItemTabs'
import { Product } from '@/types/item'

async function fetchItemDetail(itemId: number) {
  if (cookies().has('AUTH_TOKEN')) {
    commonHeader.set('Authorization', `Bearer ${cookies().get('AUTH_TOKEN')?.value}`)
  }
  const res = await fetch(`${baseLocalURL}/items?itemId=${itemId}`, {
    method: 'GET',
    headers: commonHeader,
    // headers: commonHeader,
  })
  if (!res.ok) {
    throw Error(`fail to fetch itemDetail!`)
  }

  console.log('ㅎㅂㅎ')
  return await res.json()
}

export interface itemIdParam {
  itemId: number
}
// 수정 필요!

export default async function Itemlayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { itemId: number }
}) {
  // 수정 필요!! 정리
  // const itemDetails = await fetchItemDetails(params.itemId)
  const itemDetails = await fetchItemDetail(params.itemId)

  const convertedItem: Product = convertItemDetailToProduct(itemDetails)

  return (
    <>
      <div className="fixed top-0 bg-white w-96 flex flex-col gap-2 z-10">
        <ItemHeader itemName={itemDetails.data.itemName} />
        <ItemTabs itemId={params.itemId} />
      </div>
      <div className="pt-28 py-20 min-h-screen">{children}</div>
      <div className="fixed bottom-0 h-20 w-96">
        <BottomTab wished={itemDetails.data.wished} itemId={params.itemId} product={convertedItem} />
      </div>
    </>
  )
}
