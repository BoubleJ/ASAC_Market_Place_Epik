'use client'
import React, { useState } from 'react'

import FAQFilterBox from '@/components/feature/faq/FAQFilterBox'
import FAQItemList from '@/components/feature/faq/FAQItemList'

import FQABottomSeat from './FAQBottomSeat'

export default function FAQPage({ slug }) {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false)

  const list = [
    {
      title: 'notice',
      filterTitle: 'TOP공지',
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
      filterTitle: '회원',
      body: [
        { Id: 0, Question: ' 부과되나멤버멤ㅁ버송흔멍요?', Answer: '네' },
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
      filterTitle: '상품',
      body: [
        { Id: 0, Question: ' 부과아이템 상품백택배요?', Answer: '네' },
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
      filterTitle: '주문/결제/대량주문',
      body: [
        { Id: 0, Question: ' 부과fsdfa 주문결제여ㅑㅇㄹㅇs요?', Answer: '네' },
        { Id: 1, Question: '선물하dfsf기 주 싶어요', Answer: '아니오' },
        { Id: 2, Question: ' 하나요?', Answer: '네' },
        { Id: 3, Question: 'fsdafaaa버렸습니다', Answer: '네' },
        { Id: 4, Question: '적립sss되나요?', Answer: '아니오' },
        { Id: 5, Question: '컬리앱 dfasf않아요', Answer: '아니오' },
        { Id: 6, Question: '이벤fsaf 오는데, 배송fds만 오지 않습니다', Answer: '아니오' },
        { Id: 7, Question: '상fdsa교환(반품) 기준이 궁금합니다', Answer: '아니오' },
      ],
    },
    {
      title: 'delivery',
      filterTitle: '배송',
      body: [
        { Id: 0, Question: ' 부과되나요>???요?', Answer: '네' },
        { Id: 1, Question: '선물하기 주 싶어요', Answer: '아니오' },
        { Id: 2, Question: ' 하나요캬캬캬캬캬캬컄?', Answer: '네' },
        { Id: 3, Question: 'fsdaf버렸습니다', Answer: '네' },
        { Id: 4, Question: '적립되나요?', Answer: '아니오' },
        { Id: 5, Question: '컬리앱 않아어림너라ㅣ너ㅣㅏ요', Answer: '아니오' },
        { Id: 6, Question: '이벤fsaf 오는데, 배송fds만 오지 않습니다', Answer: '아니오' },
        { Id: 7, Question: '상fdsa교환(반품) 기준이 궁금합니다', Answer: '아니오' },
      ],
    },
    {
      title: 'packing',
      filterTitle: '포장',
      body: [
        { Id: 0, Question: ' 부과하뇽어라엉요?', Answer: '네' },
        { Id: 1, Question: '선물하ㄹㅇㄴㅁ라주고기 주 싶어요', Answer: '아니오' },
        { Id: 2, Question: ' 하나요?', Answer: '네' },
        { Id: 3, Question: 'fsdaf버렸습니다', Answer: '네' },
        { Id: 4, Question: '적립되나요?', Answer: '아니오' },
        { Id: 5, Question: '컬리앱안ㄷㄻㄴ러ㅏㅣㅇㄴ머루 않아요', Answer: '아니오' },
        { Id: 6, Question: '이벤fsaf 오는데, 배송fds만 오지 않습니다', Answer: '아니오' },
        { Id: 7, Question: '상fdsa교환(반품) 기준이 궁금합니다', Answer: '아니오' },
      ],
    },
    {
      title: 'event',
      filterTitle: '이벤트/쿠폰/적립',
      body: [
        { Id: 0, Question: ' dsfadfs부과요?', Answer: '네' },
        { Id: 1, Question: '선물하일머나럼ㄴ기 주 싶어요', Answer: '아니오' },
        { Id: 2, Question: ' 하나요?', Answer: '네' },
        { Id: 3, Question: 'fsdaf버렸습니다', Answer: '네' },
        { Id: 4, Question: '적립되나요?', Answer: '아니오' },
        { Id: 5, Question: '컬리앱 않아요', Answer: '아니오' },
        { Id: 6, Question: '이벤fsaf 오는데, 배송fds만 오지 않습니다', Answer: '아니오' },
        { Id: 7, Question: '상fdsa교ㄻㄼㅇㄹㄴㅁ환(반품) 기준이 궁금합니다', Answer: '아니오' },
      ],
    },
  ]

  return (
    <>
      <FAQFilterBox setIsBottomSheetOpen={setIsBottomSheetOpen} list={list} slug={slug} />
      <FQABottomSeat isBottomSheetOpen={isBottomSheetOpen} setIsBottomSheetOpen={setIsBottomSheetOpen} list={list} />
      <FAQItemList list={list} slug={slug} />
    </>
  )
}
