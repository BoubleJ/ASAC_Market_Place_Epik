'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

import { commonHeader } from '@/api/util/instance'
import MyMenuButton from '@/components/feature/myPage/MyMenuButton'
import MyMenuContainer from '@/components/feature/myPage/MyMenuContainer'
import MyMenuItem from '@/components/feature/myPage/MyMenuItem'

const menuItems = {
  reserve: { title: '적립금', description: '100 원', path: `/myPage` },
  coupon: { title: '쿠폰', description: '', path: `/myPage` },
  orderHistory: { title: '주문내역', description: '', path: `/order-history` },
  giftHistory: { title: '선물내역', description: '', path: `/myPage` },
  wishedItems: { title: '찜한상품', description: '', path: `/wish` },
  reviews: { title: '상품후기', description: '', path: `/myPage` },
  editMemberInfo: { title: '개인정보수정', description: '', path: `/edit-info` },
  inquiry: { title: '1:1 문의', description: '', path: `/myPage` },
  FAQ: { title: '자주하는 질문', description: '', path: `/myPage` },
}

export default function MyMenus() {
  const router = useRouter()

  async function handleDelete() {
    const res = await fetch(`/api/logout`, {
      method: 'POST',
      headers: commonHeader,
    })
    const msg = await res.json()
    console.log(msg)

    router.replace('/registration')
  }

  return (
    <MyMenuContainer>
      <div className="border-4 border-grayscale-50" />
      <MyMenuItem
        title={menuItems.reserve.title}
        description={menuItems.reserve.description}
        path={menuItems.reserve.path}
      />
      <MyMenuItem title={menuItems.coupon.title} path={menuItems.coupon.path} />
      <div className="border-4 border-grayscale-50" />
      <MyMenuItem title={menuItems.orderHistory.title} path={menuItems.orderHistory.path} />
      <MyMenuItem title={menuItems.giftHistory.title} path={menuItems.giftHistory.path} />
      <MyMenuItem title={menuItems.wishedItems.title} path={menuItems.wishedItems.path} />
      <MyMenuItem title={menuItems.reviews.title} path={menuItems.reviews.path} />
      <div className="border-4 border-grayscale-50" />
      <MyMenuItem title={menuItems.editMemberInfo.title} path={menuItems.editMemberInfo.path} />
      <div className="border-4 border-grayscale-50" />
      <MyMenuItem title={menuItems.inquiry.title} path={menuItems.inquiry.path} />
      <MyMenuItem title={menuItems.FAQ.title} path={menuItems.FAQ.path} />
      <MyMenuButton
        menuName={'로그아웃'}
        onClick={() => {
          handleDelete()
        }}
      />
    </MyMenuContainer>
  )
}
