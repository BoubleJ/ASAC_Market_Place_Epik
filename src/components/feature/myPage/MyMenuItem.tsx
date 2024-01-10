import Link from 'next/link'
import React from 'react'
import { Url } from 'url'

import { ChevronRight } from '@/components/icons'
interface IMyMenuItem {
  title: string
  description?: string
  path: string | Url
}

export default function MyMenuItem({ title, description, path }: IMyMenuItem) {
  return (
    <Link href={`${path}`} className="flex py-3 px-4 justify-between items-center w-full border-b border-gray-50">
      <div className="text-title-sm font-normal">{title}</div>
      <div className="ml-auto mr-3 text-title-sm text-brand-primary-500 font-normal">{description}</div>
      <ChevronRight width={'1.5rem'} height={'1.5rem'} fill="transparent" className="text-grayscale-300" />
    </Link>
  )
}
