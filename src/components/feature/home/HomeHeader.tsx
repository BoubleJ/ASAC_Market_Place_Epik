import { Lobster } from 'next/font/google'
import React from 'react'

import CartLinkIcon from '@/components/feature/cart/CartLinkIcon'

const lobster = Lobster({ subsets: ['latin'], weight: '400' })

export default function HomeHeader() {
  return (
    <nav className="fixed top-0 z-10 flex h-14 w-96 justify-between border border-b-gray-200 bg-brand-primary-500 text-white">
      <button className={`pl-6 text-2xl ${lobster.className} `}>market place</button>
      <button className=" pr-6 text-2xl">
        <CartLinkIcon />
      </button>
    </nav>
  )
}
