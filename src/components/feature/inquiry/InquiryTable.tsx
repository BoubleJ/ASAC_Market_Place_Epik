import React from 'react'

import InquiryBox from './InquiryBox'

export default function InquiryTable() {
  const inquiryListHeader = {
    title: '제목',
    writingDay: '작성일',
    answer: '답변상태',
  }

  const inquiryList = [
    {
      title: '망고스틴이 박살...',
      writingDay: '2023.11.04',
      answer: '답변완료',
    },
    {
      title: '망고스틴이 박살...',
      writingDay: '2023.11.04',
      answer: '답변완료',
    },
    {
      title: '망고스틴이 박살...',
      writingDay: '2023.11.04',
      answer: '답변완료',
    },
  ]
  return (
    <>
      <InquiryBox inquiryBoxInfo={inquiryListHeader} height="h-10" borderColor="border-gray-800" />
      {inquiryList.map((item, idx) => {
        return <InquiryBox key={idx} inquiryBoxInfo={item} height="h-10" borderColor="border-gray-50" />
      })}
    </>
  )
}
