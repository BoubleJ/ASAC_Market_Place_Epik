'use client'
import React, { useState } from 'react'

import { InquiryList  } from '@/types/inquiry'

import InquiryBox from './InquiryBox'
import InquiryEmpty from './InquiryEmpty'
import InquiryPagnationNumber from './InquiryPagnationNumber'



export default function InquiryPagenationTable() {
  const [isInquiryListOpen, setIsInquiryListOpen] = useState(true)
  const [limit, setLimit] = useState(3)
  const [page, setPage] = useState(1)
  const offset = (page - 1) * limit

  const data = require('/public/dummyData/inquiryData.json')

  const inquiryListHeader = {
    title: '제목',
    writingDay: '작성일',
    answer: '답변상태',
  }

  return (
    <>
      {isInquiryListOpen ? (
        <div>
          <InquiryBox inquiryBoxInfo={inquiryListHeader} height="h-10" borderColor="border-gray-800" />
          {data.slice(offset, offset + limit).map((item: InquiryList, idx: number) => (
            <InquiryBox key={idx} inquiryBoxInfo={item} height="h-10" borderColor="border-gray-50" />
          ))}
          {/* <label>
            페이지 당 표시할 게시물 수:
            <select value={limit} onChange={({ target: { value } }) => setLimit(Number(value))}>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>
          </label> */}
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
