import React from 'react'

import HomeTab from '@/components/feature/home/HomeTab'

const navLinks = [
  { href: '/recommendations', tabLabel: '추천' },
  { href: '/new-arrivals', tabLabel: '신상품' },
  { href: '/best-items', tabLabel: '베스트' },
  { href: '/budgetShooping', tabLabel: '알뜰쇼핑' },
  { href: '/specialOffer', tabLabel: '특가/혜택' },
]

export default function HomeTabs() {
  return (
    <nav className="fixed top-14 w-96 py-2 h-10 text-body-sm bg-white flex justify-around z-10">
      {navLinks.map((link, index) => (
        <HomeTab key={index} href={link.href} tabLabel={link.tabLabel} />
      ))}
    </nav>
  )
}
