import { cookies } from 'next/headers'

import { baseURL, commonHeader } from '@/api/util/instance'
import OrderDetailHeader from '@/components/feature/orderDetail/orderDetailHeader'
import OrderDetailList from '@/components/feature/orderDetail/orderDetailList'
import OrderDetailPaymentInfo from '@/components/feature/orderDetail/orderDetailPaymentInfo'
import { IOrderDetail } from '@/types/order'

// export const runtime = 'edge'
export const dynamic = 'force-dynamic'

const getOrderListById = async (orderId: number) => {
  try {
    const requestHeaders = new Headers(commonHeader)

    const authToken = cookies().get('AUTH_TOKEN')?.value
    const hasCookies = cookies().has('AUTH_TOKEN')

    if (hasCookies) {
      requestHeaders.set('Authorization', `Bearer ${authToken}`)
    }

    const res = await fetch(`${baseURL}/members/mypage/orderlist/detail/${orderId}`, {
      headers: requestHeaders,
    })

    if (!res.ok) {
      console.log('Failed to get order detail', res.status)
      return { msg: '상세 주문 내역을 불러오는데 실패했습니다.' }
    }

    const response = await res.json()

    return response.data
  } catch (error) {
    return { msg: '상세 주문 내역을 불러오지 못했습니다' }
  }
}

export default async function OrderDetailPage({ params }: { params: { orderId: string } }) {
  const orderId = params.orderId
  const orderDetail: IOrderDetail = await getOrderListById(parseInt(orderId))

  return (
    <>
      <section className="w-full px-5">
        <OrderDetailHeader />
      </section>
      <section className="w-full px-5">
        <OrderDetailList
          orderDetailItems={orderDetail.orderItemDtos}
          orderId={orderDetail.orderId}
          deliveryStatus={orderDetail.deliveryStatus}
          orderDateTime={orderDetail.orderDateTime}
        />
      </section>
      <section className="w-full px-5">
        <OrderDetailPaymentInfo totalAmount={orderDetail.totalAmount} paymentMethod={orderDetail.paymentMethod} />
      </section>
    </>
  )
}
