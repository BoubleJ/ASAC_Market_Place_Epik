import Link from 'next/link'
import React from 'react'

import { basePath } from '@/api/util/instance'
import { Button } from '@/components/ui/button'

export default function InquiryEmpty() {
  return (
    <div className="mt-32 text-center mb-24">
      <p className="mb-5">등록된 1:1 문의가 없습니다.</p>
      <Button
        variant={'secondary'}
        className="w-32 border-2  border-green-500 rounded-lg h-10  text-green-500 font-thin  text-button-sm "
      >
        <Link href={`${basePath}/FAQ/member`} className=" text-green-500">
          자주하는 질문 보기
        </Link>
      </Button>
    </div>
  )
}
