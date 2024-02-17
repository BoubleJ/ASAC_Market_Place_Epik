import { cookies } from 'next/headers'

import { baseURL, commonHeader } from '@/api/util/instance'
import OrderStoreInitializer from '@/components/common/storeInitializers/OrderStoreInitializer'
import OrderForm from '@/components/feature/order/orderForm'
import OrderItemInfo from '@/components/feature/order/orderItemInfo'
import OrderUserInfo from '@/components/feature/order/orderUserInfo'
import { useOrderStore } from '@/store/client/orderSlice'
import { IOrder } from '@/types/order'
// import { IOrder } from '@/types/order'
export const dynamic = 'force-dynamic'

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
      next: { revalidate: 0 },
    })

    if (!res.ok) {
      console.log('Failed to get orders', res.status)
      return {
        orderId: 0,
        amount: 0,
        salesTotalAmount: 0,
        totalAmount: 0,
        memberName: '',
        phoneNumber: '',
        address: null,
        orderItemDtos: [],
      }
      // return { msg: '주문서를 불러오는데 실패했습니다.' }
    }

    const response = await res.json()

    return response.data
  } catch (error) {
    return { msg: '주문서를 불러오지 못했습니다' }
  }
}
const dummy = {
  orderId: 202,
  amount: 23254,
  salesTotalAmount: 4650,
  totalAmount: 18604,
  memberName: '루시',
  phoneNumber: '01011112222',
  address: null,
  orderItemDtos: [
    {
      itemId: 1,
      itemName: '나이키 대형 스마트폰 000',
      itemPrice: 23254,
      itemCount: 1,
      discountRate: 20,
    },
  ],
}
export default async function OrderPage() {
  const orders: IOrder = await getOrders()
  useOrderStore.setState({ orders: orders })
  // useOrderStore.setState({ orders: dummy })
  console.log(orders)
  const { isEmpty, setOrderName } = useOrderStore.getState()
  const isOrderEmpty = isEmpty()
  const headItemNamePrefix = isOrderEmpty ? '' : orders?.orderItemDtos[0].itemName.substring(0, 12)
  const orderProductCount = isOrderEmpty ? 0 : orders?.orderItemDtos.length
  const headItemName = isOrderEmpty ? '선택된 상품이 없습니다' : `${headItemNamePrefix}...외${orderProductCount}건`
  setOrderName(headItemName)

  return (
    <>
      <OrderStoreInitializer orders={orders} orderName={headItemName} />
      <section className="px-5">
        <OrderItemInfo />
      </section>
      <section className="px-5">
        <OrderUserInfo />
      </section>
      <OrderForm />
    </>
  )
}
