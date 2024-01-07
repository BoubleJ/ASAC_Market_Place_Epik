import OrderProduct from '@/components/feature/order/orderProduct'
import { useOrderStore } from '@/store/client/orderSlice'
import { OrderItem } from '@/types/order'

export default function OrderItemList() {
  const ordetItems = useOrderStore.getState().orders?.orderItemDtos
  return (
    <div className="flex flex-col justify-start items-start gap-2">
      {ordetItems?.map((item: OrderItem) => <OrderProduct key={item.itemId} content={item} />)}
    </div>
  )
}
