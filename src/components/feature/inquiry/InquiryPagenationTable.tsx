'use client'
import React, { useState } from 'react'

import InquiryBox from './InquiryBox'
import InquiryEmpty from './InquiryEmpty'
import InquiryPagnationNumber from './InquiryPagnationNumber'

export default function InquiryPagenationTable() {
  const [isInquiryListOpen, setIsInquiryListOpen] = useState(true)
  const [limit, setLimit] = useState(3)
  const [page, setPage] = useState(1)
  const offset = (page - 1) * limit

  const inquiryListHeader = {
    title: '제목',
    writingDay: '작성일',
    answer: '답변상태',
  }

  const data = [
    {
      title: '망고스틴이 박살...',
      writingDay: '2023.11.04',
      answer: '답변완료',
    },
    {
      title: '망고스틴이 안녕 박살...',
      writingDay: '2023.11.04',
      answer: '답변완료',
    },
    {
      title: '망고스틴박살나면 ',
      writingDay: '2023.11.04',
      answer: '답변완료',
    },
    {
      title: '망고스틴이 박살...',
      writingDay: '2023.11.04',
      answer: '답변완료',
    },
    {
      title: '망고스틴부르랑너.',
      writingDay: '2023.11.04',
      answer: '답변완료',
    },
    {
      title: '망고스변재정틴이 박살...',
      writingDay: '2023.11.04',
      answer: '답변완료',
    },
    {
      title: '망스틴이 박살...',
      writingDay: '2023.11.04',
      answer: '답변완료',
    },
    {
      title: '틴이 박살...',
      writingDay: '2023.11.04',
      answer: '답변완료',
    },
    {
      title: '고스틴이fsfsdafsa 박살...',
      writingDay: '2023.11.04',
      answer: '답변완료',
    },
  ]

  return (
    <>
      {isInquiryListOpen ? (
        <div>
          <InquiryBox inquiryBoxInfo={inquiryListHeader} height="h-10" borderColor="border-gray-800" />
          {data.slice(offset, offset + limit).map((item, idx) => (
            <InquiryBox key={idx} inquiryBoxInfo={item} height="h-10" borderColor="border-gray-50" />
          ))}
          <label>
            페이지 당 표시할 게시물 수:
            <select type="number" value={limit} onChange={({ target: { value } }) => setLimit(Number(value))}>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>
          </label>
          <footer>
            <InquiryPagnationNumber total={data.length} limit={limit} page={page} setPage={setPage} />
          </footer>
        </div>
      ) : (
        <InquiryEmpty />
      )}
    </>
  )
}
