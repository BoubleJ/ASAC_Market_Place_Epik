'use client'

import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'

import { fetchCouponList } from '@/api/resource/coupon'
import { useModalState } from '@/components/provider/modalProvider'
import { Coupon } from '@/types/coupon'

interface OrderCouponListProps {
  setCoupon: Dispatch<SetStateAction<Coupon | null>>
}

function OrderCouponList({ setCoupon }: OrderCouponListProps) {
  const modalState = useModalState()
  const [selectedCoupon, setSelectedCoupon] = useState<Coupon | null>(null)
  
  const [coupons, setCoupons] = useState<Coupon[]>([])
  const [errorMsg, setErrorMsg] = useState<string>('')
  useEffect(() => {
    fetchCouponList().then((res) => {
      console.log('쿠폰 출력', res)
      if (res.msg) {
        setErrorMsg(res.msg)
        return
      }
      setCoupons(res)
    })
  }, [])

  const handleCouponSelect = (coupon: Coupon) => {
    setSelectedCoupon(coupon)
  }

  return (
    <form method="dialog">
      <ul>
        {coupons.map((coupon) => (
          <li key={coupon.Id}>
            <button onClick={() => handleCouponSelect(coupon)}>선택</button>
          </li>
        ))}
      </ul>
    </form>
  )
}

export default OrderCouponList
