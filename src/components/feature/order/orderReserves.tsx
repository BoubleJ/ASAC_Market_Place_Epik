'use client'

import React from 'react'

import OrderContainer from '@/components/feature/order/orderContainer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function OrderReserves() {
  return (
    <OrderContainer>
      <div className="mb-[15px]">
        <span className="text-body-base">적립금</span>
      </div>
      <div className="flex items-center justify-between gap-2 rounded-md">
        <Input
          type="text"
          className="line-clamp-1 basis-3/4 px-4 py-3 text-body-base text-grayscale-200"
          placeholder=""
          defaultValue={0}
        />
        <Button variant={'ghost'} size={'sm'} className="basis-1/4 text-grayscale-700">
          모두사용
        </Button>
      </div>
    </OrderContainer>
  )
}
