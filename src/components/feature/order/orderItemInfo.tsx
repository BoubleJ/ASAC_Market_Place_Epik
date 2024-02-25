import OrderItemList from '@/components/feature/order/orderItemList'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { useOrderStore } from '@/store/client/orderSlice'

export default function OrderItemInfo() {
  const { orders, isEmpty, setOrderName } = useOrderStore.getState()
  const isOrderEmpty = isEmpty()
  const headItemNamePrefix = isOrderEmpty ? '' : orders?.orderItemDtos[0].itemName.substring(0, 12)
  const orderProductCount = isOrderEmpty ? 0 : orders?.orderItemDtos.length
  const headItemName = isOrderEmpty ? '선택된 상품이 없습니다' : `${headItemNamePrefix}...외${orderProductCount}건`
  setOrderName(headItemName)
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-body-base">
          <span className="">주문상품</span>
          <span className="ml-auto pr-[9px] line-clamp-1">{headItemName}</span>
        </AccordionTrigger>
        <AccordionContent>{!isOrderEmpty && <OrderItemList />}</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
