import { Lobster } from 'next/font/google'
import Link from 'next/link'
import React from 'react'
import { PiHandbagSimple } from 'react-icons/pi'

const lobster = Lobster({ subsets: ['latin'], weight: '400' })

export default function HomeHeader() {
  return (
    <nav className="fixed top-0 w-96 h-14 bg-brand-primary-500 border border-b-gray-200 text-white flex justify-between z-10">
      <button className={`pl-6 text-2xl ${lobster.className} `}>market place</button>
      <button className=" text-2xl pr-6">
        <Link href={`/cart`}>
          <PiHandbagSimple />
        </Link>
      </button>
    </nav>
  )
}
