import React from 'react'

import Header from '@/components/common/header'
import CartLinkIcon from '@/components/feature/cart/CartLinkIcon'

export default function MyPageHeader() {
  return (
    <div className="w-full h-full overflow-hidden text-white bg-brand-primary-500 no-scrollbar">
      <Header
        left={<div> </div>}
        center={<span className="text-center">마이마켓</span>}
        right={
          <button className="ml-auto">
            <CartLinkIcon />
          </button>
        }
      />
    </div>
  )
}
