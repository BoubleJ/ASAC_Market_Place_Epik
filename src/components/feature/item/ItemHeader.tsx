'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

import { Bag, ChevronLeft } from '@/components/icons'
import { Button } from '@/components/ui/button'

export default function ItemHeader({ itemName }: { itemName: string }) {
  const router = useRouter()
  return (
    <header className="border-b-2 border-grayscale-50 w-full py-4 px-5">
      <nav className="flex gap-4 items-center text-title-lg">
        <Button
          onClick={() => router.back()}
          size={'icon'}
          className="bg-transparent text-grayscale-900 hover:bg-transparent border-0 ring-0 shadow-none"
        >
          <ChevronLeft height={'1.5rem'} width={'1.5rem'} fill="transparent" />
        </Button>
        <span className="truncate flex-grow text-center">{itemName}</span>
        <Button
          size={'icon'}
          // onClick={() => router.back()}
          className="bg-transparent text-grayscale-900 hover:bg-transparent border-0 ring-0 shadow-none ml-auto"
        >
          <Link href={`/cart`}>
            <Bag width={'1.5rem'} height={'1.5rem'} fill="white" />
          </Link>
        </Button>
      </nav>
    </header>
  )
}
