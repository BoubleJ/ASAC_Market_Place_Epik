'use client'

import axios from 'axios'
import React, { useEffect, useState } from 'react'

import InquiryPagnation from './InquiryPagnation'

export default function InquiryPagenationTable() {
  const [data, setData] = useState({})
  const [page, setPage] = useState(1)

  useEffect(() => {
    const getAllBooks = async () => {
      try {
        const { data } = await axios.get('https://bookstore-v2-api.onrender.com/api/v1/books', {
          params: { page, limit: 2 },
        })
        setData({
          list: data?.data,
          totalPage: data?.pagination?.totalPage,
        })
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    getAllBooks()
  }, [page])
  return (
    <div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Genre
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Discount
              </th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data?.list?.length > 0 &&
              data.list.map((item, index) => {
                return (
                  <tr key={item._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {item.name}
                    </th>
                    <td className="px-6 py-4"> {item?.genre[0]?.name}</td>
                    <td className="px-6 py-4"> {item.price}</td>
                    <td className="px-6 py-4"> {item.discount}</td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>

      {data && data.totalPage > 1 && (
        <InquiryPagnation
          total={data.totalPage}
          current={page}
          onChange={(page) => {
            setPage(page)
          }}
        />
      )}
    </div>
  )
}
