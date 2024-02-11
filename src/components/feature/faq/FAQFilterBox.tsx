'use client'

import SvgTriangleDown from '@/components/icons/triangle-down'
import { List, ListProps } from '@/types/faq'

export default function FAQFilterBox({
  setIsBottomSheetOpen,
  list,
  slug,
}: {
  setIsBottomSheetOpen: React.Dispatch<React.SetStateAction<boolean>>
  list: List
  slug: string
}) {
  const bottomSheetHandler = () => {
    setIsBottomSheetOpen(true)
  }

  const result = list.find((item: ListProps) => item.title == slug)
  return (
    <>
      <div
        className=" w-full h-12 border-2 border-solid rounded-md border-grayscale-100  mb-5"
        onClick={() => {
          bottomSheetHandler()
        }}
      >
        <div className=" text-body-base pl-5 py-3">
          {result.filterTitle}
          <div className="float-right pt-0.5 pb-3 pr-2.5">
            <SvgTriangleDown />
          </div>
        </div>
      </div>
    </>
  )
}
