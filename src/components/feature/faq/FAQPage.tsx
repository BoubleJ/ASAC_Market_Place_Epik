'use client'
import React, { useState } from 'react'

import FAQFilterBox from '@/components/feature/faq/FAQFilterBox'
import FAQItemList from '@/components/feature/faq/FAQItemList'

import FQABottomSeat from './FAQBottomSeat'
import { usePathname } from 'next/navigation'

export default function FAQPage() {

    const pathname = usePathname()
    console.log(pathname)

  const list = {
    member: [
      { Id: 0, Question: '교환(반품) 진행 시, 배송비가 부과되나요?', Answer: '네' },
      { Id: 1, Question: '선물하기 주문을 취소하고 싶어요', Answer: '아니오' },
      { Id: 2, Question: '포장재를 회수하기도 하나요?', Answer: '네' },
      { Id: 3, Question: '아이디, 비밀번호를 잊어버렸습니다', Answer: '네' },
      { Id: 4, Question: '적립금은 언제 지급되나요?', Answer: '아니오' },
      { Id: 5, Question: '컬리앱이 켜지지 않아요', Answer: '아니오' },
      { Id: 6, Question: '이벤트 문자는 오는데, 배송완료 문자만 오지 않습니다', Answer: '아니오' },
      { Id: 7, Question: '상품 불량인 경우, 교환(반품) 기준이 궁금합니다', Answer: '아니오' },
    ],

    item: [
      { Id: 0, Question: ' 부과되나요?', Answer: '네' },
      { Id: 1, Question: '선물하기 주문을 취소하고 싶어요', Answer: '아니오' },
      { Id: 2, Question: ' 하나요?', Answer: '네' },
      { Id: 3, Question: '아이디, 비밀번호를 잊어버렸습니다', Answer: '네' },
      { Id: 4, Question: '적립되나요?', Answer: '아니오' },
      { Id: 5, Question: '컬리앱이 켜지지 않아요', Answer: '아니오' },
      { Id: 6, Question: '이벤트 문자는 오는데, 배송완료 문자만 오지 않습니다', Answer: '아니오' },
      { Id: 7, Question: '상품 불량인 경우, 교환(반품) 기준이 궁금합니다', Answer: '아니오' },
    ],

    order: [
      { Id: 0, Question: '교환배송비가 부과되나요?', Answer: '네' },
      { Id: 1, Question: '선물하기 주문을 취소하고 싶어요', Answer: '아니오' },
      { Id: 2, Question: '포장재도 하나요?', Answer: '네' },
      { Id: 3, Question: '아이호를 잊어버렸습니다', Answer: '네' },
      { Id: 4, Question: '적립금은 언제 지급되나요?', Answer: '아니오' },
      { Id: 5, Question: '컬리앱아요', Answer: '아니오' },
      { Id: 6, Question: '이벤트 문자는 오는데, 배송완료 문자만 오지 않습니다', Answer: '아니오' },
      { Id: 7, Question: '상품, 교환(반품) 기준이 궁금합니다', Answer: '아니오' },
    ],
  }


  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false)

  return (
    <>
      <FAQFilterBox setIsBottomSheetOpen={setIsBottomSheetOpen} />
      <FQABottomSeat isBottomSheetOpen={isBottomSheetOpen} setIsBottomSheetOpen={setIsBottomSheetOpen} list={list} />
      <FAQItemList list={list} />
    </>
  )
}
