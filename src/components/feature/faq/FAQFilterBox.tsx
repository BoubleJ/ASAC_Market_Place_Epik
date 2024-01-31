'use client'

import React, { useState } from 'react'
import { createPortal } from 'react-dom'

import ModalContent from './ModalContent'

export default function FAQFilterBox() {
  const [showModal, setShowModal] = useState(false)
  return (
    <div>
      <button onClick={() => setShowModal(true)}>Show modal using a portal</button>

      {showModal && createPortal(<ModalContent onClose={() => setShowModal(false)} />, document.body)}
    </div>
  )
}
