import React from 'react'

export default function Spinner() {
  return (
    <div className="flex w-full items-center justify-center p-36">
      <div className="relative h-12 w-12 animate-spin rounded-full bg-gradient-to-r from-white to-brand-primary-400">
        <div className="absolute left-1/2 top-1/2 inline-block h-10 w-10 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-white"></div>
      </div>
    </div>
  )
}
