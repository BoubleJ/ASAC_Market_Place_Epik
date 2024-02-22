import React from 'react'

import FAQPage from '@/components/feature/faq/FAQPage'
import { useParams } from 'next/navigation'

interface Props {
  params: {
    FAQId: string
  }
  searchParams: {}
}

export default function page(props: Props) {
  const slug = props.params.FAQId
  const params = useParams<{ tag: string; item: string }>()
  console.log(params)
  return (
    <div className="h-full w-full p-4">
      <div className=" text-title-lg">
        <FAQPage slug={slug} />
      </div>
    </div>
  )
}
