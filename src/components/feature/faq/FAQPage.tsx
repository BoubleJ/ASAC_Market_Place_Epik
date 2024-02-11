'use client'
import React, { useState } from 'react'

import FAQFilterBox from '@/components/feature/faq/FAQFilterBox'
import FAQItemList from '@/components/feature/faq/FAQItemList'

import FQABottomSeat from './FAQBottomSeat'

export default function FAQPage({ slug }: { slug: string }) {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false)
  const list = require('/public/dummyData/faqData.json')

  return (
    <>
      <div>
        <FAQFilterBox setIsBottomSheetOpen={setIsBottomSheetOpen} list={list} slug={slug} />
        <FQABottomSeat isBottomSheetOpen={isBottomSheetOpen} setIsBottomSheetOpen={setIsBottomSheetOpen} list={list} />
        <FAQItemList list={list} slug={slug} />
      </div>
    </>
  )
}
