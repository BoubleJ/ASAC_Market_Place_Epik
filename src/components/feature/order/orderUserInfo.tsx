'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { useOrderStore } from '@/store/client/orderSlice'

export default function OrderUserInfo() {
  const { orders } = useOrderStore()

  console.log(orders)
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-body-base">
          <span className="">주문자 정보</span>
          <span className="ml-auto pr-[9px]">{orders?.memberName}</span>
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex text-body-base text-grayscale-700 w-full justify-between">
            <div className="flex flex-col items-start">
              <span className="">보내는 분</span>
              <span className="">휴대폰</span>
            </div>
            <div className="flex flex-col items-end">
              <span className="">{orders?.memberName}</span>
              <span className="">010-5347-2006</span>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
