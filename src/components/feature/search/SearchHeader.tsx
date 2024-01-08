import Link from 'next/link'
import React from 'react'

import Header from '@/components/common/header'
import { Bag } from '@/components/icons'
import { Button } from '@/components/ui/button'

export default function SearchHeader() {
  return (
    <div className="bg-brand-primary-500 text-white ">
      <Header
        left={<div></div>}
        center={<span className="text-center">검색</span>}
        right={
          <Button
            size={'icon'}
            // onClick={() => }
            className="bg-transparent hover:bg-transparent border-0 ring-0 shadow-none ml-auto"
          >
            <Link href={`/cart`}>
              <Bag width={'1.5rem'} height={'1.5rem'} fill="transparent" />
            </Link>
          </Button>
        }
      />
    </div>
  )
}
