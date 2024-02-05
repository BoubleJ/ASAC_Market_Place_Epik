import React from 'react'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

interface FAQList {
  Id : number
  Question: string
  Answer: string
}

export default function FAQItemList() {
  const FAQList: FAQList[] = [
    {  Id : 0, Question: '교환(반품) 진행 시, 배송비가 부과되나요?', Answer: '네' },
    { Id : 1,Question: '선물하기 주문을 취소하고 싶어요', Answer: '아니오' },
    { Id : 2,Question: '포장재를 회수하기도 하나요?', Answer: '네' },
    { Id : 3,Question: '아이디, 비밀번호를 잊어버렸습니다', Answer: '네' },
    {Id : 4, Question: '적립금은 언제 지급되나요?', Answer: '아니오' },
    { Id : 5,Question: '컬리앱이 켜지지 않아요', Answer: '아니오' },
    { Id : 6,Question: '이벤트 문자는 오는데, 배송완료 문자만 오지 않습니다', Answer: '아니오' },
    { Id : 7,Question: '상품 불량인 경우, 교환(반품) 기준이 궁금합니다', Answer: '아니오' },
  ]

  return (
    <>
      {FAQList.map((item, idx) => {
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
