'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

import CartLinkIcon from '@/components/feature/cart/CartLinkIcon'
import { ChevronLeft } from '@/components/icons'
import { Button } from '@/components/ui/button'

export default function ItemHeader({ itemName }: { itemName: string }) {
  const router = useRouter()
  return (
    <header className="h-full w-full border-b border-grayscale-50 px-5 py-4">
      <nav className="flex items-center gap-4 text-title-lg">
        <Button
          onClick={() => router.back()}
          size={'icon'}
          className="border-0 bg-transparent text-grayscale-900 shadow-none ring-0 hover:bg-transparent"
        >
          <ChevronLeft height={'1.5rem'} width={'1.5rem'} fill="transparent" />
        </Button>
        <span className="flex-grow truncate text-center">{itemName}</span>
        <Button
          size={'icon'}
          // onClick={() => router.back()}
          className="ml-auto border-0 bg-transparent text-grayscale-900 shadow-none ring-0 hover:bg-transparent"
        >
          <CartLinkIcon className="text-black" />
        </Button>
      </nav>
    </header>
  )
}
