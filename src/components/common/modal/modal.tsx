/* eslint-disable react/display-name */
'use client'
import React, { ForwardedRef, forwardRef } from 'react'

import { useModalState } from '@/components/provider/modalProvider'

interface ModalProps {
  children: React.ReactNode
}

const Modal = forwardRef((props: ModalProps, ref: ForwardedRef<HTMLDialogElement>) => {
  const state = useModalState()

  /**
   * 모달창을 닫기 버튼 혹은 backdrop을 클릭하여 닫는 것이 일반적인 UX
   * e.target: 이벤트가 발생한 요소
   * e.currentTarget: 이벤트 핸들러가 부착된 요소
   * dialog 요소:
   *  dialog 내부 요소와 backdrop(바깥영역)으로 구성
   *  dialog 요소(e.currentTarget, state.modalRef.current)와 클릭 이벤트가 발생한 요소(e.target)를 비교
   *  dialog 내부 요소는 dialog와 다른 요소, dialog의 backdrop은 dialog와 같은 요소 취급
   */
  const closeIfClickedOutside = (e: React.UIEvent<HTMLDialogElement>) => {
    // console.log(e.target)
    // console.log(e.currentTarget)
    // console.log(state.modalRef.current)
    if (e.target === state.modalRef.current) {
      state.modalRef.current.close()
    }
  }

  return (
    <dialog ref={ref} className="backdrop:bg-black backdrop:opacity-40 rounded-lg" onClick={closeIfClickedOutside}>
      <div className="flex flex-col gap-2">{props.children}</div>
    </dialog>
  )
})

export default Modal
