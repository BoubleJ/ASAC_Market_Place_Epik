import React from 'react'

import MyMenus from '@/components/feature/myPage/MyMenus'
import Profile from '@/components/feature/myPage/Profile'

export default function page() {
  return (
    <>
      <div className="p-4">
        <Profile />
      </div>
      <div className="w-full border-b-4 border-grayscale-50"></div>
      <MyMenus />
    </>
  )
}
