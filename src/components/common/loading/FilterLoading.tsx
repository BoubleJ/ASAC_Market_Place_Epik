import React from 'react'

export default function FilterLoading() {
  return (
    <div className="w-full">
      <div className={`bg-white py-2 px-4 flex justify-between z-10 text-body-xs`}>
        <div className="animate-pulse bg-grayscale-100 rounded-lg w-10 h-5"></div>
        <div className="flex gap-5">
          <div className="animate-pulse bg-grayscale-100 rounded-lg w-12 h-5"></div>
          <div className="animate-pulse bg-grayscale-100 rounded-lg w-9 h-5"></div>
        </div>
      </div>

      <div className="flex gap-4 py-2 px-3">
        <div>
          <button className="animate-pulse flex gap-1 items-center bg-white border border-grayscale-200 rounded-full w-20 h-6 px-3 py-1 text-gray-600 font-md text-xs"></button>
        </div>
        <div>
          <button className="animate-pulse flex gap-1 items-center bg-white border border-grayscale-200 rounded-full w-20 h-6 px-3 py-1 text-gray-600 font-md text-xs"></button>
        </div>
        <div>
          <button className="animate-pulse flex gap-1 items-center bg-white border border-grayscale-200 rounded-full w-16 h-6 px-3 py-1 text-gray-600 font-md text-xs"></button>
        </div>
      </div>
    </div>
  )
}
