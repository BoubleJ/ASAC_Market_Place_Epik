import React from 'react'

interface Props {
  left?: React.ReactNode
  center?: React.ReactNode
  right?: React.ReactNode
}

export default function Header({ left, center, right }: Props) {
  return (
    <header className=" border-b border-b-2 border-grayscale-50 w-full py-5 px-5">
      {/* <nav className="grid grid-cols-3 content-between items-center text-title-lg"> */}
      <nav className="flex items-center text-title-lg">
        <div className="basis-1/6 flex justify-start">{left}</div>
        <div className="basis-4/6 flex justify-center">{center}</div>
        <div className="basis-1/6 flex justify-end">{right}</div>
      </nav>
    </header>
  )
}
