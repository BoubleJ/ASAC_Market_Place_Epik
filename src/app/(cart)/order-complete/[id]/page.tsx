import OrderCompleteBill from '@/components/feature/orderComplete/orderCompleteBill'
import OrderCompleteHeader from '@/components/feature/orderComplete/orderCompleteHeader'
import OrderCompleteMessage from '@/components/feature/orderComplete/orderCompleteMessage'
import OrderCompleteNavButton from '@/components/feature/orderComplete/orderCompleteNavButton'

// export const runtime = 'edge'

export default async function OrderCompletePage({
  param,
  searchParams,
}: {
  param: { id: string }
  searchParams: { orderName: string; memberName: string; paid_amount: string }
}) {
  const { orderName, memberName, paid_amount } = searchParams
  return (
    <section className="w-full px-5">
      <OrderCompleteHeader />
      <OrderCompleteMessage memberName={memberName} orderName={orderName} />
      <OrderCompleteBill totalAmount={paid_amount} />
      <OrderCompleteNavButton />
    </section>
  )
}
