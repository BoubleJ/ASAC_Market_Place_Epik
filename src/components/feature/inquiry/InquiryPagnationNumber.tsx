import React from 'react'

import { ChevronLeft } from '@/components/icons'
import { ChevronRight } from '@/components/icons'

export default function InquiryPagnationNumber({
  total,
  limit,
  page,
  setPage,
}: {
  total: number
  limit: number
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
}) {
  const numPages = Math.ceil(total / limit)

  return (
    <div className="pt-6">
      <nav className="flex justify-center items-center gap-4 m-16">
        <button className="" onClick={() => setPage(page - 1)} disabled={page === 1}>
          <ChevronLeft className=" fill-transparent" width={'1.5rem'} height={'1.5rem'} />
        </button>
        {Array(numPages)
          .fill()
          .map((item, i) => (
            <button
              className=""
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? 'page' : undefined}
            >
              {i + 1}
            </button>
          ))}
        <button className="" onClick={() => setPage(page + 1)} disabled={page === numPages}>
          <ChevronRight className=" fill-transparent" width={'1.5rem'} height={'1.5rem'} />
        </button>
      </nav>
    </div>
  )
}
