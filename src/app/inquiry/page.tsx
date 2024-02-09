import React from 'react'

import InquiryPagenationTable from '@/components/feature/inquiry/InquiryPagenationTable'
import InquiryTable from '@/components/feature/inquiry/InquiryTable'

export default function page() {
  return (
    <div className="w-full h-full">
      <div className=" text-title-sm">
        <InquiryTable />
      </div>
      <InquiryPagenationTable />
  
    </div>
  )
}
