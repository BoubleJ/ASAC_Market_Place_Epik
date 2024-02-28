'use client'

import React, { useEffect, useState } from 'react'

import { fetchCouponList } from '@/api/resource/coupon'
import { convertStringToDateFormaUTC } from '@/lib/utils'
import { Coupon } from '@/types/coupon'

export default function Coupon() {
  const [couponList, setCouponList] = useState<Coupon[]>([])
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  useEffect(() => {
    fetchCouponList().then((res) => {
      console.log('res출력', res)
      if (res.msg) {
        setErrorMsg(res.msg)
        return
      }
      setCouponList(res)
    })
  }, [])

  return (
    <>
      {errorMsg && <span>{errorMsg}</span>}
      {couponList.map((item, idx) => {
        return (
          <div key={idx} className="mb-5 h-40 w-full rounded-md border-2 border-solid border-grayscale-100 p-5">
            <p className="text-body-2xl">{item.couponName}</p>
            <div className="mb-4 text-gray-400">
              <p>
                {idx + 1}만원 이상 주문 시 {item.discountValue} % 할인
              </p>
              <p>일부 상품 제외</p>
            </div>
            <p className="text-purple-800">
              {item.validFrom ? (
                <div>
                  <p>{convertStringToDateFormaUTC(item.validFrom)}부터</p>
                  <p>{convertStringToDateFormaUTC(item.validTo)}까지 사용가능</p>
                </div>
              ) : (
                '기간 제한 없음'
              )}
            </p>
          </div>
        )
      })}
    </>
  )
}
