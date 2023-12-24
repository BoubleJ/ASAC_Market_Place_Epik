'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function HomeTab({ href, tabLabel }: { href: string; tabLabel: string }) {
  const pathname = usePathname()
  return (
    <Link
      className={` ${
        pathname.startsWith(href) ? 'text-brand-primary-500 border-b-2 border-brand-primary-500' : 'text-grayscale-400'
      }`}
      href={href}
    >
      <div>{tabLabel}</div>
    </Link>
  )
}
