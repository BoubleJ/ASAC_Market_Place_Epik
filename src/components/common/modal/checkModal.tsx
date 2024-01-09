import React from 'react'

import { useModalState } from '@/components/provider/modalProvider'
import { Button } from '@/components/ui/button'

interface ICheckModal {
  content: string | React.ReactNode
  onClick?:()=>void
}

export default function CheckModal({ content, onClick }: ICheckModal) {
  const state = useModalState()
  const handleClose = async () => {
    if(onClick !== undefined){
      onClick()
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
          onClick={handleClose}
        >
          확인
        </Button>
      </div>
    </>
  )
}
