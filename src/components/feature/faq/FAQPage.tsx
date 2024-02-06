'use client'
import React, { useState } from 'react'

import FAQFilterBox from '@/components/feature/faq/FAQFilterBox'
import FAQItemList from '@/components/feature/faq/FAQItemList'

import FQABottomSeat from './FAQBottomSeat'
import { usePathname } from 'next/navigation'

export default function FAQPage({ slug }) {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false)

  const list = [
    {
      title: 'notice',
      body: [
        { Id: 0, Question: '교환(반품) 진행 시, 배송비가 부과되나요?', Answer: '네' },
        { Id: 1, Question: '선물하기 주문을 취소하고 싶어요', Answer: '아니오' },
        { Id: 2, Question: '포장재를 회수하기도 하나요?', Answer: '네' },
        { Id: 3, Question: '아이디, 비밀번호를 잊어버렸습니다', Answer: '네' },
        { Id: 4, Question: '적립금은 언제 지급되나요?', Answer: '아니오' },
        { Id: 5, Question: '컬리앱이 켜지지 않아요', Answer: '아니오' },
        { Id: 6, Question: '이벤트 문자는 오는데, 배송완료 문자만 오지 않습니다', Answer: '아니오' },
        { Id: 7, Question: '상품 불량인 경우, 교환(반품) 기준이 궁금합니다', Answer: '아니오' },
      ],
    },

    {
      title: 'member',
      body: [
        { Id: 0, Question: ' 부과되나요?', Answer: '네' },
        { Id: 1, Question: '선물하기 주문을 취소하고 싶어요', Answer: '아니오' },
        { Id: 2, Question: ' 하나요?', Answer: '네' },
        { Id: 3, Question: '아이디, 비밀번호를 잊어버렸습니다', Answer: '네' },
        { Id: 4, Question: '적립되나요?', Answer: '아니오' },
        { Id: 5, Question: '컬리앱이 켜지지 않아요', Answer: '아니오' },
        { Id: 6, Question: '이벤트 문자는 오는데, 배송완료 문자만 오지 않습니다', Answer: '아니오' },
        { Id: 7, Question: '상품 불량인 경우, 교환(반품) 기준이 궁금합니다', Answer: '아니오' },
      ],
    },
    {
      title: 'item',
      body: [
        { Id: 0, Question: ' 부과요?', Answer: '네' },
        { Id: 1, Question: '선물하기 주 싶어요', Answer: '아니오' },
        { Id: 2, Question: ' 하나요?', Answer: '네' },
        { Id: 3, Question: 'fsdaf버렸습니다', Answer: '네' },
        { Id: 4, Question: '적립되나요?', Answer: '아니오' },
        { Id: 5, Question: '컬리앱 않아요', Answer: '아니오' },
        { Id: 6, Question: '이벤fsaf 오는데, 배송fds만 오지 않습니다', Answer: '아니오' },
        { Id: 7, Question: '상fdsa교환(반품) 기준이 궁금합니다', Answer: '아니오' },
      ],
    },
    {
      title: 'order',
      body: [
        { Id: 0, Question: ' 부과요?', Answer: '네' },
        { Id: 1, Question: '선물하기 주 싶어요', Answer: '아니오' },
        { Id: 2, Question: ' 하나요?', Answer: '네' },
        { Id: 3, Question: 'fsdaf버렸습니다', Answer: '네' },
        { Id: 4, Question: '적립되나요?', Answer: '아니오' },
        { Id: 5, Question: '컬리앱 않아요', Answer: '아니오' },
        { Id: 6, Question: '이벤fsaf 오는데, 배송fds만 오지 않습니다', Answer: '아니오' },
        { Id: 7, Question: '상fdsa교환(반품) 기준이 궁금합니다', Answer: '아니오' },
      ],
    },
    {
      title: 'delivery',
      body: [
        { Id: 0, Question: ' 부과요?', Answer: '네' },
        { Id: 1, Question: '선물하기 주 싶어요', Answer: '아니오' },
        { Id: 2, Question: ' 하나요?', Answer: '네' },
        { Id: 3, Question: 'fsdaf버렸습니다', Answer: '네' },
        { Id: 4, Question: '적립되나요?', Answer: '아니오' },
        { Id: 5, Question: '컬리앱 않아요', Answer: '아니오' },
        { Id: 6, Question: '이벤fsaf 오는데, 배송fds만 오지 않습니다', Answer: '아니오' },
        { Id: 7, Question: '상fdsa교환(반품) 기준이 궁금합니다', Answer: '아니오' },
      ],
    },
    {
      title: 'packing',
      body: [
        { Id: 0, Question: ' 부과요?', Answer: '네' },
        { Id: 1, Question: '선물하기 주 싶어요', Answer: '아니오' },
        { Id: 2, Question: ' 하나요?', Answer: '네' },
        { Id: 3, Question: 'fsdaf버렸습니다', Answer: '네' },
        { Id: 4, Question: '적립되나요?', Answer: '아니오' },
        { Id: 5, Question: '컬리앱 않아요', Answer: '아니오' },
        { Id: 6, Question: '이벤fsaf 오는데, 배송fds만 오지 않습니다', Answer: '아니오' },
        { Id: 7, Question: '상fdsa교환(반품) 기준이 궁금합니다', Answer: '아니오' },
      ],
    },
    {
        title: 'event',
        body: [
          { Id: 0, Question: ' 부과요?', Answer: '네' },
          { Id: 1, Question: '선물하기 주 싶어요', Answer: '아니오' },
          { Id: 2, Question: ' 하나요?', Answer: '네' },
          { Id: 3, Question: 'fsdaf버렸습니다', Answer: '네' },
          { Id: 4, Question: '적립되나요?', Answer: '아니오' },
          { Id: 5, Question: '컬리앱 않아요', Answer: '아니오' },
          { Id: 6, Question: '이벤fsaf 오는데, 배송fds만 오지 않습니다', Answer: '아니오' },
          { Id: 7, Question: '상fdsa교환(반품) 기준이 궁금합니다', Answer: '아니오' },
        ],
      },
  ]

  return (
    <>
      <FAQFilterBox setIsBottomSheetOpen={setIsBottomSheetOpen} slug={slug} />
      <FQABottomSeat isBottomSheetOpen={isBottomSheetOpen} setIsBottomSheetOpen={setIsBottomSheetOpen} list={list} />
      <FAQItemList list={list} slug={slug} />
    </>
  )
}
