import { cookies } from 'next/headers'

import { baseURL, commonHeader } from '@/api/util/instance'
import OrderHistoryButtonGroup from '@/components/feature/orderHistory/orderHistoryButtonGroup'
import OrderHistoryHeader from '@/components/feature/orderHistory/orderHistoryHeader'
import OrderHistorylist from '@/components/feature/orderHistory/orderHistorylist'

// export const runtime = 'edge'
export const dynamic = 'force-dynamic'

const InititlaButtonContents = [
  { id: 'OrderHistoryButton3', content: '3개월', month: 3, clicked: true },
  { id: 'OrderHistoryButton6', content: '6개월', month: 6, clicked: false },
  { id: 'OrderHistoryButton12', content: '1년', month: 12, clicked: false },
  { id: 'OrderHistoryButton36', content: '3년', month: 36, clicked: false },
]

const getOrderList = async () => {
  try {
    const requestHeaders = new Headers(commonHeader)

    const authToken = cookies().get('AUTH_TOKEN')?.value
    const hasCookies = cookies().has('AUTH_TOKEN')

    if (hasCookies) {
      requestHeaders.set('Authorization', `Bearer ${authToken}`)
    }

    const res = await fetch(`${baseURL}/members/mypage/orderlist?month=${3}`, {
      headers: requestHeaders,
    })

    if (!res.ok) {
      console.log('Failed to get orders', res.status)
      return { msg: '주문내역을 불러오는데 실패했습니다.' }
    }

    const response = await res.json()

    return response.data
  } catch (error) {
    return { msg: '주문내역을 불러오지 못했습니다' }
  }
}

export default async function OrderHistoryePage() {
  const initialIOrderList = await getOrderList()

  return (
    <section className="w-full px-5">
      <OrderHistoryHeader />
      <OrderHistoryButtonGroup initialData={InititlaButtonContents} />
      <OrderHistorylist initialOrderList={initialIOrderList} />
    </section>
  )
}
