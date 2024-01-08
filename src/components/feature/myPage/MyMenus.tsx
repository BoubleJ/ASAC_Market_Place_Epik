'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

import { commonHeader } from '@/api/util/instance'

import MyMenu from './MyMenu'

export default function MyMenus() {
  const router = useRouter()

  async function handleDelete() {
    const res = await fetch(`/api/logout`, {
      method: 'POST',
      headers: commonHeader,
    })
    const msg = await res.json()
    console.log(msg)

    router.replace('/myPage')
  }

  return (
    <div className="flex flex-col w-full">
      <div className="border-4 border-grayscale-50"></div>
      <MyMenu menuName={'적립금'} detail={'100 원'} />
      <MyMenu menuName={'쿠폰'} />
      <div className="border-4 border-grayscale-50"></div>
      <MyMenu menuName={'주문내역'} />
      <MyMenu menuName={'선물내역'} />
      {/* <MyMenu menuName={'자주사는상품'} /> */}
      <MyMenu menuName={'찜한상품'} onClick={() => router.push('/wish')} />
      <MyMenu menuName={'상품후기'} />
      <div className="border-4 border-grayscale-50"></div>
      <MyMenu menuName={'개인정보수정'} onClick={() => router.push('/edit-info')} />
      <div className="border-4 border-grayscale-50"></div>

      <MyMenu menuName={'1:1 문의'} />
      <MyMenu menuName={'자주하는 질문'} />
      <MyMenu
        menuName={'로그아웃'}
        onClick={() => {
          handleDelete()
        }}
      />
    </div>
  )
}
