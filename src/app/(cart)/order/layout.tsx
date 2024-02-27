import { Metadata } from 'next'

import { getOrders } from '@/api/server/order'
import { OrderStoreProvider } from '@/components/provider/OrderStoreProvider'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Market place | 주문',
  description: 'Market place order page',
}

async function layout({ children }: { children: React.ReactNode }) {
  const orders = await getOrders()
  console.log('layout order', orders)
  return <OrderStoreProvider orders={orders}>{children}</OrderStoreProvider>
}

export default layout
