'use client'

import React from 'react'

import { useOrderStore } from '@/components/provider/OrderStoreProvider'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

function OrderUserInfo() {
  const { memberName } = useOrderStore((state) => state.orders)

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-body-base">
          <span className="">주문자 정보</span>
          <span className="ml-auto pr-[9px]">{memberName}</span>
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex w-full justify-between text-body-base text-grayscale-700">
            <div className="flex flex-col items-start">
              <span className="">보내는 분</span>
              <span className="">휴대폰</span>
            </div>
            <div className="flex flex-col items-end">
              <span className="">{memberName}</span>
              <span className="">010-5347-2006</span>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default React.memo(OrderUserInfo)
