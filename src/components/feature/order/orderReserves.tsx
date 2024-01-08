import React from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function OrderReserves() {
  return (
    <div className="py-4">
      <div className="mb-[15px]">
        <span className="text-body-base">적립금</span>
      </div>
      <div className="flex justify-between items-center rounded-md gap-2">
        <Input
          type="text"
          className="text-body-base line-clamp-1 py-3 px-4 text-grayscale-200 basis-3/4"
          placeholder=""
          defaultValue={0}
        />
        <Button variant={'ghost'} size={'sm'} className="text-grayscale-700 basis-1/4">
          모두사용
        </Button>
      </div>
    </div>
  )
}
