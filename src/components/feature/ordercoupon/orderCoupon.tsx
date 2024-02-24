'use client'

import { useState } from 'react'

import OrderCouponModal from '@/components/feature/ordercoupon/orderCouponModal'

export default function OrderCoupon() {
  const [isCouponModalOpen, setIsCouponModalOpen] = useState(false)
  const couponModalHandler = () => {
    setIsCouponModalOpen(true)
  }

  return (
    <>
      <div className="mb-[15px]">
        <span className="text-body-base">쿠폰</span>
      </div>
      <div
        className="flex items-center justify-between rounded-md border-2 border-gray-200 bg-grayscale-50 text-grayscale-200"
        onClick={() => {
          couponModalHandler()
        }}
      >
        <span className="line-clamp-2 px-4 py-3 text-body-base">사용가능 쿠폰 0장/전체 0장</span>
      </div>
      <OrderCouponModal isCouponModalOpen={isCouponModalOpen} setIsCouponModalOpen={setIsCouponModalOpen} />
    </>
  )
}
