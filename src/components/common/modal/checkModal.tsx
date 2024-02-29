import React from 'react'

import { useModalState } from '@/components/provider/modalProvider'
import { Button } from '@/components/ui/button'

interface ICheckModal {
  content: string | React.ReactNode
  onClick?: () => void
}

export default function CheckModal({ content, onClick }: ICheckModal) {
  const state = useModalState()
  const handleClose = async () => {
    if (onClick !== undefined) {
      onClick()
    }
    state.modalRef.current?.close()
  }

  return (
    <>
      <section className="w-[320px] px-8 py-5 text-start text-body-md">
        <span className="">{content}</span>
      </section>
      <div className="flex justify-end text-body-md">
        <Button
          variant={'outline'}
          className="ouline-none ring-none h-10 rounded-none border-none hover:bg-transparent"
          onClick={handleClose}
        >
          확인
        </Button>
      </div>
    </>
  )
}
