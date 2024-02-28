'use client'

import OrderProduct from '@/components/feature/order/orderProduct'
import { useOrderStore } from '@/components/provider/OrderStoreProvider'
import { OrderItem } from '@/types/order'

export default function OrderItemList() {
  const ordetItems = useOrderStore((state) => state.orders).orderItemDtos
  return (
    <div className="flex flex-col items-start justify-start gap-2">
      {ordetItems?.map((item: OrderItem) => <OrderProduct key={item.itemId} content={item} />)}
    </div>
  )
}
