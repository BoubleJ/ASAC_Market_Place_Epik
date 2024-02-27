'use client'
import OrderItemList from '@/components/feature/order/orderItemList'
import { useOrderStore } from '@/components/provider/OrderStoreProvider'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export default function OrderItemInfo() {
  const { orders, isEmpty, getOrderName } = useOrderStore((state) => state)
  const headItemName = getOrderName(orders)
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-body-base">
          <span className="">주문상품</span>
          <span className="ml-auto line-clamp-1 pr-[9px]">{headItemName}</span>
        </AccordionTrigger>
        <AccordionContent>{!isEmpty() && <OrderItemList />}</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
