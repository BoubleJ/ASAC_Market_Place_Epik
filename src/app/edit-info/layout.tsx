import React from 'react'

import EditInfoHeader from '@/components/feature/editInfo/EditInfoHeader'

export default function EditInfoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <EditInfoHeader />
      <div className="pt-20">{children}</div>
    </>
  )
}
