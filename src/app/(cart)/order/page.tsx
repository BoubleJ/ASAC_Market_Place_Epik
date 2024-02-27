import OrderForm from '@/components/feature/order/orderForm'
import OrderHeader from '@/components/feature/order/orderHeader'
import OrderItemInfo from '@/components/feature/order/orderItemInfo'
import OrderUserInfo from '@/components/feature/order/orderUserInfo'
// import { IOrder } from '@/types/order'
// export const dynamic = 'force-dynamic'

export default async function OrderPage() {
  return (
    <section className="w-full">
      <OrderHeader />
      <section className="px-5">
        <OrderItemInfo />
      </section>
      <section className="px-5">
        <OrderUserInfo />
      </section>
      <OrderForm />
    </section>
  )
}
