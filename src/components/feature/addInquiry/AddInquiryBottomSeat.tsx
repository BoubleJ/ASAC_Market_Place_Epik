'use client'

import React, { useState } from 'react'

export default function AddInquiryBottomSeat({ isBottomSheetOpen, setIsBottomSheetOpen, list, setInquiryType }) {
 
  const typeHandler = (clickType) => {
    setInquiryType(clickType)
  }

  const closeBottomSheetHandler = () => {
    setIsBottomSheetOpen(false)
  }

  return (
    <>
      {isBottomSheetOpen && (
        <div>
          <div
            className="fixed inset-0 bg-black opacity-40 z-10"
            onClick={() => {
              closeBottomSheetHandler()
            }}
          ></div>
          <div className="fixed bottom-0 w-96 h-2/3 border-solid border-black border-2 bg-white rounded-t-xl z-30">
            <div className="relative">
              <p className="pl-5 text-title-lg pt-11 pb-4">문의 유형 선택</p>

              {list.map((item, idx) => {
                return (
                  <div
                    onClick={() => {
                      closeBottomSheetHandler()
                      typeHandler(item)
                    }}
                    className="w-full h-14 hover:bg-grayscale-50"
                    key={idx}
                  >
                    <p className=" pl-5 py-4 text-body-md">{item}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
