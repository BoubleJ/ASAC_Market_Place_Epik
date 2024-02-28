import React from 'react'

export default function ItemListLoading() {
  return (
    <div className="grid grid-cols-2 justify-items-center gap-3 px-5 pt-4">
      <SmallCardLoading />
      <SmallCardLoading />
      <SmallCardLoading />
      <SmallCardLoading />
    </div>
  )
}

export function SmallCardLoading() {
  return (
    <div className={`w-full px-2 h-full `}>
      <div className="h-full w-full justify-start gap-2 flex flex-col">
        <div className="h-full w-full justify-start items-start flex flex-col gap-2">
          <div className="animate-pulse relative w-full h-48 bg-gray-200"></div>
          <div className="animate-pulse flex-col w-full items-start h-4 bg-gray-200"></div>
          <div className=" h-2 bg-gray-100 w-20 "></div>
          <div className=" h-2 bg-gray-100 w-10 "></div>
          <div className=" h-2 bg-gray-100 w-14 "></div>
        </div>
        <button className="h-4 bg-gray-100 w-full rounded-md text-xs py-1 flex justify-center items-center gap-1 text-gray-500"></button>
      </div>
    </div>
  )
}
