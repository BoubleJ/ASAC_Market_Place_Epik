'use client'

import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import FAQBottomSeat from './FAQBottomSeat'

export default function FAQFilterBox() {
  let [Modal, setModal] = useState(false)
  let [portalElement, setPortalElement] = useState<Element | null>(null)

  useEffect(() => {
    setPortalElement(document.getElementById('portal'))
  }, [Modal])

  const ModalHandler = () => {
    setModal(!Modal)
  }

  return (
    <div>
      <div className="bg-yellow-400 w-20 h-10" onClick={ModalHandler}>
        <p>로그인</p>
      </div>
      {Modal && portalElement
        ? createPortal(
            <FAQBottomSeat
              ModalHandler={function (): void {
                throw new Error('Function not implemented.')
              }}
            />,
            portalElement,
          )
        : null}
    </div>
  )
}
