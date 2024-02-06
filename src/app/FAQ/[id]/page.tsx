import React from 'react'

import FAQPage from '@/components/feature/faq/FAQPage'

export default function page(props) {
  const slug = props.params.id
  console.log(props.params.id)
  return (
    <div className="w-full h-full p-4">
      <div className=" text-title-lg">
        <FAQPage slug={slug} />
      </div>
    </div>
  )
}
