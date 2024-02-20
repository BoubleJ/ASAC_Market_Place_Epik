import React from 'react'

export default function CouponBox() {
  return (
    <>
      <div className="w-full h-40 border-2 border-solid rounded-md border-grayscale-100 p-5 mb-5">
        <p className=" text-body-2xl">10,000원 할인</p>
        <p className="text-body-md">10,000원 할인 쿠폰</p>
        <div className="  text-gray-400 mb-4">
          <p>20,000원 이상 주문 시</p>
          <p>일부 상품 제외</p>
        </div>
        <p className="text-purple-800">2024년 4월 24일 24시까지</p>
      </div>
    </>
  )
}
