import React from 'react'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Body, List, ListProps } from '@/types/faq'

export default function FAQItemList({ list, FAQId }: { list: List; FAQId: string }) {
  const result = list.find((item: ListProps) => item.title == FAQId)
  const body = result?.body

  return (
    <>
      {body?.map((item: Body) => {
        return (
          <Accordion type="single" collapsible className="w-full" key={item.Id}>
            <AccordionItem value="item-1">
              <AccordionTrigger className=" text-body-base">
                <div>
                  <span className="rounded-3xl bg-brand-primary-500  px-2 py-1 text-body-base text-white">Q</span>
                  <span className="pl-3">{item.Question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-body-base">
                <div className="pl-10">{item.Answer}</div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )
      })}
    </>
  )
}
