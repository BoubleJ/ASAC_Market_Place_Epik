import React from 'react'

import { Button } from '@/components/ui/button'

export default function InquiryEmpty() {
  return (
    <div className="mt-32 text-center mb-24">
      <p className="mb-5">등록된 1:1 문의가 없습니다.</p>
      <Button
        variant={'secondary'}
        className="w-32 border-2  border-green-500 rounded-lg h-10  text-green-500 font-thin  text-button-sm "
      >
        <p className=" text-green-500">자주하는 질문 보기</p>
      </Button>
    </div>
  )
}
