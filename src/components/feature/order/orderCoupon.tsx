import React from 'react'

export default function OrderCoupon() {
  return (
    <div className="py-4">
      <div className="mb-[15px]">
        <span className="text-body-base">쿠폰</span>
      </div>
      <div className="flex justify-between items-center border-gray-200 border-2 rounded-md bg-grayscale-50 text-grayscale-200">
        <span className="text-body-base line-clamp-2 py-3 px-4">사용가능 쿠폰 0장/전체 0장</span>
      </div>
    </div>
  )
}
