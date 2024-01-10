import { cookies } from 'next/headers'

import { baseURL, commonHeader } from '@/api/util/instance'
import OrderAddress from '@/components/feature/order/orderAddress'
import OrderBill from '@/components/feature/order/orderBill'
import OrderCoupon from '@/components/feature/order/orderCoupon'
import OrderHeader from '@/components/feature/order/orderHeader'
import OrderItemInfo from '@/components/feature/order/orderItemInfo'
import OrderPaymentButton from '@/components/feature/order/orderPaymentButton'
import OrderPaymentMothod from '@/components/feature/order/orderPaymentMothod'
import OrderReserves from '@/components/feature/order/orderReserves'
import OrderShippingRequirement from '@/components/feature/order/orderShippingRequirement'
import OrderTerms from '@/components/feature/order/orderTerms'
import OrderUserInfo from '@/components/feature/order/orderUserInfo'
import { useOrderStore } from '@/store/client/orderSlice'
import { IOrder } from '@/types/order'

export const runtime = 'edge'

const getOrders = async () => {
  try {
    const requestHeaders = new Headers(commonHeader)

    const authToken = cookies().get('AUTH_TOKEN')?.value
    const hasCookies = cookies().has('AUTH_TOKEN')

    if (hasCookies) {
      requestHeaders.set('Authorization', `Bearer ${authToken}`)
    }

    const res = await fetch(`${baseURL}/orders`, {
      headers: requestHeaders,
    })

    if (!res.ok) {
      console.log('Failed to get orders', res.status)
      return { msg: '주문서를 불러오는데 실패했습니다.' }
    }

    const response = await res.json()

    return response.data
  } catch (error) {
    return { msg: '주문서를 불러오지 못했습니다' }
  }
}

export default async function OrderPage() {
  const orders: IOrder = await getOrders()
  useOrderStore.setState({ orders: orders })
  return (
    <>
      <section className="w-full px-5">
        <OrderHeader />
        <OrderItemInfo orderItems={orders.orderItemDtos} />
      </section>
      <section className="w-full px-5">
        <OrderUserInfo />
      </section>
      <section className="w-full px-5">
        <OrderAddress />
      </section>
      <section className="w-full px-5">
        <OrderShippingRequirement />
      </section>
      <section className="w-full px-5">
        <OrderCoupon />
      </section>
      <section className="w-full px-5">
        <OrderReserves />
      </section>
      <section className="w-full px-5">
        <OrderPaymentMothod />
      </section>
      <section className="w-full px-5">
        <OrderBill />
      </section>
      <section className="w-full px-5 pb-[61px]">
        <OrderTerms />
        <OrderPaymentButton content={orders} />
      </section>
    </>
  )
}
