import React from 'react'

interface Props {
  onClose: () => void
}

export default function ModalContent({ onClose }) {
  return (
    <div>
      <div>a modal dialog</div>
      <button onClick={onClose}>Close</button>
    </div>
  )
}
