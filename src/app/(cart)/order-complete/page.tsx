import OrderCompleteBill from '@/components/feature/orderComplete/orderCompleteBill'
import OrderCompleteHeader from '@/components/feature/orderComplete/orderCompleteHeader'
import OrderCompleteMessage from '@/components/feature/orderComplete/orderCompleteMessage'
import OrderCompleteNavButton from '@/components/feature/orderComplete/orderCompleteNavButton'

// export const runtime = 'edge'

export default async function OrderCompletePage() {
  return (
    <section className="w-full px-5">
      <OrderCompleteHeader />
      <OrderCompleteMessage />
      <OrderCompleteBill />
      <OrderCompleteNavButton />
    </section>
  )
}
