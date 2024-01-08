import React from 'react'

import { useModalState } from '@/components/provider/modalProvider'
import { Button } from '@/components/ui/button'

interface ISelectModal {
  content: string
  onCheck?: () => void
  onCancel?: () => void
}

export default function SelectModal({ content, onCheck, onCancel }: ISelectModal) {
  const state = useModalState()
  const handleCheck = () => {
    if (onCheck !== undefined) {
      onCheck()
    }
    state.modalRef.current?.close()
  }
  const handleCancel = () => {
    if (onCancel !== undefined) {
      onCancel()
    }
    state.modalRef.current?.close()
  }
  return (
    <>
      <section className="py-5 px-8 text-body-md text-start w-[320px]">
        <span className="">{content}</span>
      </section>
      <div className="flex justify-end text-body-md">
        <Button
          variant={'outline'}
          className="ouline-none ring-none rounded-none border-none hover:bg-transparent h-10"
          onClick={handleCancel}
        >
          취소
        </Button>
        <Button
          variant={'outline'}
          className="ouline-none ring-none rounded-none border-none hover:bg-transparent h-10"
          onClick={handleCheck}
        >
          확인
        </Button>
      </div>
    </>
  )
}
