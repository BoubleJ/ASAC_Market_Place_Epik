import React from 'react'

import NotLoggedInPeofile from '@/components/feature/myPage/NotLoggedInPeofile'

export default function RegistrationPage() {
  return (
    <>
      <div className="p-4">
        <NotLoggedInPeofile />
      </div>
      <div className="w-full border-b-4 border-grayscale-50"></div>
    </>
  )
}
