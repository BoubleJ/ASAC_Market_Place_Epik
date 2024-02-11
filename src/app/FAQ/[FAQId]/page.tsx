import React from 'react'

import FAQPage from '@/components/feature/faq/FAQPage'

interface Props {
  params: {
    FAQId: string;
  };
  searchParams: {};
}

export default function page(props :  Props) {
  const slug = props.params.FAQId


  return (
    <div className="w-full h-full p-4">
      <div className=" text-title-lg">
        <FAQPage slug={slug} />
      </div>
    </div>
  )
}
