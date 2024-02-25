import React from 'react'

import SvgTriangleDown from '@/components/icons/triangle-down'

export default function AddInquiryTypeBox({
  setIsBottomSheetOpen,
  inquiryType,
}: {
  setIsBottomSheetOpen: React.Dispatch<React.SetStateAction<boolean>>
  inquiryType: string
}) {
  const bottomSheetHandler = () => {
    setIsBottomSheetOpen(true)
  }

  return (
    <>
      <div
        className=" w-full h-12 border-2 border-solid rounded-md border-grayscale-100  mb-6"
        onClick={() => {
          bottomSheetHandler()
        }}
      >
        <div className=" text-body-base pl-5 py-3">
          {inquiryType}
          <div className="float-right pt-0.5 pb-3 pr-2.5">
            <SvgTriangleDown />
          </div>
        </div>
      </div>
    </>
  )
}
