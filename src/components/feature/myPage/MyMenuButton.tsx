import React from 'react'

import { ChevronRight } from '@/components/icons'

export default function MyMenuButton({
  menuName,
  detail,
  onClick,
}: {
  menuName: string
  detail?: string
  onClick?: () => void
}) {
  return (
    <button onClick={onClick} className="flex py-3 px-4 justify-between items-center w-full border-b border-gray-50">
      <div className="text-title-sm font-normal">{menuName}</div>
      <div className="ml-auto mr-3 text-title-sm text-brand-primary-500 font-normal">{detail}</div>
      <ChevronRight width={'1.5rem'} height={'1.5rem'} fill="transparent" className="text-grayscale-300" />
    </button>
  )
}
