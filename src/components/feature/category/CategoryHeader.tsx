import React from 'react'

import Header from '@/components/common/header'
import CartLinkIcon from '@/components/feature/cart/CartLinkIcon'
import { Button } from '@/components/ui/button'

export default function CategoryHeader() {
  return (
    <div className="w-full bg-brand-primary-500 text-white">
      <Header
        left={<div></div>}
        center={<span className="text-center">카테고리</span>}
        right={
          <Button size={'icon'} className="bg-transparent hover:bg-transparent border-0 ring-0 shadow-none ml-auto">
            <CartLinkIcon />
          </Button>
        }
      />
    </div>
  )
}
