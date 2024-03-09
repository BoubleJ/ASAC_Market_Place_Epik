import { cookies } from 'next/headers'

import { baseURL } from '@/api/util/instance'
import OrderHistoryHeader from '@/components/feature/orderHistory/orderHistoryHeader'
import OrderHistorylist from '@/components/feature/orderHistory/orderHistorylist'
import OrderHistoryTab from '@/components/feature/orderHistory/orderHistoryTab'

export const dynamic = 'force-dynamic'

const getOrderList = async (month: number) => {
  try {
    const requestHeaders = new Headers()
    console.log(month)

    const authToken = cookies().get('AUTH_TOKEN')?.value
    const hasCookies = cookies().has('AUTH_TOKEN')

    if (hasCookies) {
      requestHeaders.set('Authorization', `Bearer ${authToken}`)
    }
    const res = await fetch(`${baseURL}/members/mypage/orderlist?month=${month}`, {
      headers: requestHeaders,
    })

    if (!res.ok) {
      console.log('Failed to get orderlists', res.status)
      return { msg: '주문내역을 불러오는데 실패했습니다.' }
    }

    const response = await res.json()

    return response.data
  } catch (error) {
    return { msg: '주문내역을 불러오지 못했습니다' }
  }
}

export default async function OrderHistoryePage({ searchParams }: { searchParams: { duration: string } }) {
  const { duration } = searchParams
  const isEmptySearchParams = duration === undefined
  const month = isEmptySearchParams ? 3 : parseInt(duration)
  const initialIOrderList = await getOrderList(month)
  console.log(initialIOrderList)
  return (
    <section className="w-full px-5">
      <OrderHistoryHeader />
      <OrderHistoryTab />
      <OrderHistorylist initialOrderList={initialIOrderList} />
    </section>
  )
}
