import React from 'react'

import FAQDropDown from '@/components/feature/faq/FAQDropDown'
import FAQFilterBox from '@/components/feature/faq/FAQFilterBox'
import FAQItemList from '@/components/feature/faq/FAQItemList'

export default function page() {
  return (
    <div className="w-full h-full p-4">
      <div className=" text-title-lg">
        <FAQItemList />
        <FAQDropDown />
        <FAQFilterBox />
      </div>
    </div>
  )
}
