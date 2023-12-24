import React from 'react'

import Header from '@/components/common/header'
import { Bag } from '@/components/icons'
import { Button } from '@/components/ui/button'

export default function CategoryHeader() {
  return (
    <div className="w-full bg-brand-primary-500 text-white">
      <Header
        left={<div></div>}
        center={<span className="text-center">카테고리</span>}
        right={
          <Button size={'icon'} className="bg-transparent hover:bg-transparent border-0 ring-0 shadow-none ml-auto">
            <Bag width={'1.5rem'} height={'1.5rem'} fill="transparent" />
          </Button>
        }
      />
    </div>
  )
}
