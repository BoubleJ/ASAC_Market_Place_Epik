'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

import categoryData from '@/../public/category.json'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { CategoryList } from '@/types/category'

export default function CategoryAccordion({ category }: { category: CategoryList }) {
  const router = useRouter()

  return (
    <>
      <Accordion type="single" collapsible className="w-full">
        {category.map((mainCategory, index) => (
          <AccordionItem id={index.toString()} key={index} value={`item ${index + 1}`}>
            <AccordionTrigger className="px-4 hover:bg-grayscale-50">{mainCategory.name}</AccordionTrigger>

            <AccordionContent className="bg-grayscale-50 py-4">
              <div className="px-6 flex flex-col items-start gap-3 ">
                <button
                  className="hover:font-semibold"
                  onClick={() => {
                    router.push(`/categories/${mainCategory.name}-전체보기`)
                  }}
                >
                  전체보기
                </button>
                {mainCategory.subCategories.map((subCategory) => (
                  <button
                    onClick={() => {
                      router.push(`/categories/${mainCategory.name}-${subCategory.name}`)
                    }}
                    className="hover:font-semibold"
                    key={subCategory.name}
                  >
                    {subCategory.name}
                  </button>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      {/* 들어갈 데이터 예시 */}
      <Accordion type="single" collapsible className="w-full">
        {categoryData.category.map((mainCategory, index) => (
          <AccordionItem id={index.toString()} key={index} value={`item ${index + 1}`}>
            <AccordionTrigger className="px-4 hover:bg-grayscale-50">{mainCategory.name}</AccordionTrigger>
            <AccordionContent className="bg-grayscale-50 py-4">
              <div className="px-6 flex flex-col items-start gap-3 ">
                {mainCategory.subCategory.map((subCategory) => (
                  <button
                    onClick={() => {
                      router.push(`/categories/categoryItems?main=${mainCategory.name}&sub=${subCategory.name}`)
                    }}
                    className="hover:font-semibold"
                    key={subCategory.name}
                  >
                    {subCategory.name}
                  </button>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  )
}
