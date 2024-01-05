import OrderAddress from '@/components/feature/order/orderAddress'
import OrderBill from '@/components/feature/order/orderBill'
import OrderCoupon from '@/components/feature/order/orderCoupon'
import OrderPaymentButton from '@/components/feature/order/orderPaymentButton'
import OrderPaymentMothod from '@/components/feature/order/orderPaymentMothod'
import OrderReserves from '@/components/feature/order/orderReserves'
import OrderShippingRequirement from '@/components/feature/order/orderShippingRequirement'
import OrderTerms from '@/components/feature/order/orderTerms'
import OrderUserInfo from '@/components/feature/order/orderUserInfo'
import OrderCompleteHeader from '@/components/feature/orderComplete/orderCompleteHeader'

// export const runtime = 'edge'

export default async function OrderCompletePage() {
  return (
    <>
      <section className="w-full px-5">
        <OrderCompleteHeader />
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
        <OrderPaymentButton />
      </section>
    </>
  )
}
