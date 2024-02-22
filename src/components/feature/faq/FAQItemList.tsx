import React from 'react'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Body, List, ListProps } from '@/types/faq'

export default function FAQItemList({ list, slug }: { list: List; slug: string }) {
  const result = list.find((item: ListProps) => item.title == slug)
  const body = result?.body

  return (
    <>
      {body?.map((item: Body) => {
        return (
          <Accordion type="single" collapsible className="w-full" key={item.Id}>
            <AccordionItem value="item-1">
              <AccordionTrigger className=" text-body-base">
                <div>
                  <span className="py-1 px-2  bg-brand-primary-500 rounded-3xl text-body-base text-white">Q</span>
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
