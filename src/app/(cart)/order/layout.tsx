import { Metadata } from 'next'

import OrderHeader from '@/components/feature/order/orderHeader'

export const metadata: Metadata = {
  title: 'Market place | 주문',
  description: 'Market place order page',
}

function layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="w-full">
      <OrderHeader />
      {children}
    </section>
  )
}

export default layout
