'use client'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'

export default function ItemTabs({ itemId }: { itemId: number }) {
  const navLinks = [
    { tab: null, tabLabel: '상품설명' },
    { tab: `detail`, tabLabel: '상세정보' },
    { tab: `review`, tabLabel: '후기' },
    { tab: `nquiry`, tabLabel: '문의' },
  ]
  const param = useSearchParams()

  return (
    <nav className="sticky top-16 z-10 flex justify-around border-b  border-b-grayscale-50 bg-white pt-1  text-body-sm">
      {navLinks.map((link, index) => (
        <Link
          key={index}
          className={`pb-1 ${
            param.get('tab') === link.tab
              ? 'border-b-2 border-brand-primary-500 text-brand-primary-500'
              : 'text-grayscale-400'
          }`}
          href={link.tab === null ? `/items/${itemId}` : `/items/${itemId}?tab=${link.tab}`}
          replace
        >
          <div>{link.tabLabel}</div>
        </Link>
      ))}
    </nav>
  )
}
