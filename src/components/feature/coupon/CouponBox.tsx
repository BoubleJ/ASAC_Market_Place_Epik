'use client'

import React, { useEffect, useState } from 'react'

import { fetchCouponList } from '@/api/resource/coupon'
import { useModalState } from '@/components/provider/modalProvider'

export default function CouponBox() {
  const [couponList, setCouponList] = useState([])

  const state = useModalState()

  useEffect(() => {
    async function getCouponList() {
      const res = await fetchCouponList()
      //fetchCouponList()  api/resource/coupon 에서 import 해오기
      setCouponList(res.data)
    }
    getCouponList()
  }, [state])

  console.log('쿠폰리스트', couponList)

  return (
    <>
      <div className="mb-5 h-40 w-full rounded-md border-2 border-solid border-grayscale-100 p-5">
        <p className=" text-body-2xl">10,000원 할인</p>
        <p className="text-body-md">10,000원 할인 쿠폰</p>
        <div className="  mb-4 text-gray-400">
          <p>20,000원 이상 주문 시</p>
          <p>일부 상품 제외</p>
        </div>
        <p className="text-purple-800">2024년 4월 24일 24시까지</p>
      </div>
    </>
  )
}
