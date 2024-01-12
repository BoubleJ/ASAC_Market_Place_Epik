'use client'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

import { cn } from '@/lib/utils'

export default function OrderHistoryTab() {
  const navLinks = [
    { tab: null, content: '3개월', month: null },
    { tab: 'sixmonth', content: '6개월', month: '6' },
    { tab: 'oneyear', content: '1년', month: '12' },
    { tab: 'threeyear', content: '3년', month: '36' },
  ]

  const param = useSearchParams()

  return (
    <nav className="flex gap-[6px] justify-between py-4">
      {navLinks.map((link) => (
        <Link
          key={`order_history_${link.month}`}
          replace
          href={link.tab === null ? `/order-history` : `/order-history?duration=${link.month}`}
          className={cn(
            'text-grayscale-400 w-1/4 rounded-md py-2 px-2 text-center text-body-md align-middle border border-grayscale-200',
            {
              'text-brand-primary-500 border-b-2 border-brand-primary-500': param.get('duration') === link.month,
            },
          )}
        >
          {link.content}
        </Link>
      ))}
    </nav>
  )
}
