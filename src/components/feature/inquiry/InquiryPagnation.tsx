import React from 'react'

export default function InquiryPagnation({ total, current, onChange }) {
  let items = []

  if (current > 1) {
    items.push(
      <li
        key="prev"
        onClick={() => {
          onChange(current - 1)
        }}
      >
        <p className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          Previous
        </p>
      </li>,
    )
  }

  for (let page = 1; page <= total; page++) {
    items.push(
      page === current ? (
        <li
          key={page}
          onClick={() => {
            onChange(page)
          }}
        >
          <p
            aria-current="page"
            className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
          >
            {page}
          </p>
        </li>
      ) : (
        <li key={page}  onClick={() => {
          onChange(page)
        }}>
          <p className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            {page}
          </p>
        </li>
      ),
    )
  }

  if (current < total) {
    items.push(
      <li
        key="next"
        onClick={() => {
          onChange(current + 1)
        }}
      >
        <p className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          Next
        </p>
      </li>,
    )
  }

  return (
    <div className="pt-6">
      <nav aria-label="Page navigation example">
        <ul className="inline-flex -space-x-px text-sm">{items}</ul>
      </nav>
    </div>
  )
}
