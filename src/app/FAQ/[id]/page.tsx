import Link from 'next/link'
import React from 'react'

import FAQFilterBox from '@/components/feature/faq/FAQFilterBox'
import FAQItemList from '@/components/feature/faq/FAQItemList'

interface List {
  Id: number
  title: string
  body: string
}

export default function page(props) {
  const list: List[] = [
    { Id: 0, title: 'top', body: '탑' },
    { Id: 1, title: 'member', body: '멤버' },
    { Id: 2, title: 'item', body: '상품' },
    { Id: 3, title: 'order', body: '주문' },
    { Id: 4, title: 'delivery', body: '배송' },
  ]

  return (
    <div className="w-full h-full p-4">
      <div className=" text-title-lg">
        {list.map((item) => {
          return (
            <div key={item.Id}>
              <Link href={'/FAQ/' + item.title}>{item.title}</Link>
            </div>
          )
        })}
        <p>{list[0].body}</p>
        <FAQFilterBox />
        <FAQItemList />
      </div>
    </div>
  )
}
