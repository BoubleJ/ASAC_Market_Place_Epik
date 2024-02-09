import React from 'react'

export default function InquiryBox({ inquiryBoxInfo, height, borderColor }) {
  return (
    <div>
      <div className={`w-full ${height} border-solid border-b-2 border-black flex ${borderColor} `}>
        <div className="flex-2 text-center py-2">{inquiryBoxInfo.title}</div>
        <div className="flex-1 text-center py-2">{inquiryBoxInfo.writingDay}</div>
        <div className="flex-1 text-center py-2">{inquiryBoxInfo.answer}</div>
      </div>
    </div>
  )
}
