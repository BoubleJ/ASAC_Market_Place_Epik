import OrderItemList from '@/components/feature/order/orderItemList'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { OrderItem } from '@/types/order'

interface IOrderItemInfo {
  orderItems: OrderItem[]
}

export default function OrderItemInfo({ orderItems }: IOrderItemInfo) {
  const isEmpty = !orderItems
  const headItemNamePrefix = isEmpty ? '' : orderItems[0].itemName.substring(0, 12)
  const orderProductCount = !orderItems ? 0 : orderItems.length
  const headItemName = isEmpty ? '선택된 상품이 없습니다' : `${headItemNamePrefix}...외${orderProductCount}건`
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-body-base">
          <span className="">주문상품</span>
          <span className="ml-auto pr-[9px] line-clamp-1">{headItemName}</span>
        </AccordionTrigger>
        <AccordionContent>{!isEmpty && <OrderItemList />}</AccordionContent>
        {/* <AccordionContent>{<OrderItemList />}</AccordionContent> */}
      </AccordionItem>
    </Accordion>
  )
}
