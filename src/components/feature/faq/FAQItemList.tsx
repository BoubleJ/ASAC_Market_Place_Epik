import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export default function FAQItemList({ list, slug }) {
  const result = list.find((item) => item.title == slug )


  return (
    <>
      {result.body.map((item) => {
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
