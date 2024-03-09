import Link from 'next/link'

import { basePath } from '@/api/util/instance'
import Header from '@/components/common/header'
import { ChevronLeft } from '@/components/icons'

export default function FAQHeader() {
  return (
    <Header
      left={
        <Link className="text-grayscale-800" href={`${basePath}/myPage`}>
          <ChevronLeft className=" fill-transparent" width={'1.5rem'} height={'1.5rem'} />
        </Link>
      }
      center={<span className="text-center text-title-lg text-grayscale-800">자주하는 질문</span>}
    />
  )
}
