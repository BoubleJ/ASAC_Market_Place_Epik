import React from 'react'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export default function page() {
  return (
    <div className=" text-title-lg">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className=" text-body-base">
            <span className="py-1 px-2  bg-brand-primary-500 rounded-3xl text-body-base text-white">Q</span>교환 반품
            진행시 배송비가 부과되나요?
          </AccordionTrigger>
          <AccordionContent>그럴리가요</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>교환 반품 진행시 배송비가 부과되나요?</AccordionTrigger>
          <AccordionContent>그럴리가요</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>교환 반품 진행시 배송비가 부과되나요?</AccordionTrigger>
          <AccordionContent>그럴리가요</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
