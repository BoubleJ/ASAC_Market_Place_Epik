'use client'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import React from 'react'

import { Home, Menu, Search, User } from '@/components/icons'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const segment = useSelectedLayoutSegment()
  return (
    <section className="relative z-10">
      <div className="pb-14"> {children}</div>
      <nav className="fixed w-96 bottom-0 h-14 bg-white border-t border-t-gray-300 text-2xl flex items-center justify-around">
        <Link className={`${segment === '(home)' ? 'text-brand-primary-500' : 'text-black'}`} href={'/recommendations'}>
          <Home width={'1.5rem'} height={'1.5rem'} fill="transparent" />
        </Link>
        <Link
          className={`${segment === '(category)' ? 'text-brand-primary-500' : 'text-black'}`}
          href={'/categories/category'}
        >
          <Menu width={'1.5rem'} height={'1.5rem'} className="" fill="transparent" />
        </Link>
        <Link className={`${segment === '(search)' ? 'text-brand-primary-500' : 'text-black'}`} href={'/search'}>
          <Search width={'1.5rem'} height={'1.5rem'} className="" fill="transparent" />
        </Link>
        <Link className={`${segment === '(myPage)' ? 'text-brand-primary-500' : 'text-black'}`} href={'/myPage'}>
          <User width={'1.5rem'} height={'1.5rem'} fill="transparent" />
        </Link>
      </nav>
    </section>
  )
}
