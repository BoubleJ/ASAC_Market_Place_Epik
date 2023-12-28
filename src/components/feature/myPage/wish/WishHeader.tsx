import React from 'react'

import Header from '@/components/common/header'
import { ChevronLeft } from '@/components/icons'

export default function WishHeader() {
  return (
    <Header
      left={<ChevronLeft width={'1.5rem'} height={'1.5rem'} fill="transparent" />}
      center={<span className="text-center">찜한 상품</span>}
    />
  )
}
