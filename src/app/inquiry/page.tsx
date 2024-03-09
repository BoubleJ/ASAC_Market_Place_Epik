import React from 'react'

import InquiryBottomButton from '@/components/feature/inquiry/InquiryBottomButton'
import InquiryPagenationTable from '@/components/feature/inquiry/InquiryPagenationTable'

export default function page() {
  return (
    <div className="w-full h-full">
      <div className=" text-title-sm">
        <InquiryPagenationTable />
      </div>
      <InquiryBottomButton />
    </div>
  )
}
