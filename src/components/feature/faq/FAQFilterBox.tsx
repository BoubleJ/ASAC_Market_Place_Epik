'use client'

import React, { useState } from 'react'
import { createPortal } from 'react-dom'

import ModalContent from './ModalContent'

export default function FAQFilterBox() {
  const [showModal, setShowModal] = useState<boolean>(false)

  return (
    <div>
      {showModal && createPortal(<ModalContent onClose={() => setShowModal(false)} />, document.body)}
      <button className="" onClick={() => setShowModal(true)}>
        Show modal using a portal
      </button>
    </div>
  )
}
