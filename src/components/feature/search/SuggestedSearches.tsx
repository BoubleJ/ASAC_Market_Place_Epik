import React from 'react'

const suggestedKeywords = ['아이스크림', '딸기', '크림치즈', '베이글', '초콜릿', '밀크티', '치즈케익', '치킨']
export default function SuggestedSearches({ handleClick }: { handleClick: (clickedWord: string) => void }) {
  return (
    <div className="flex flex-col gap-3">
      <header className=" text-headline3">추천검색어</header>
      {/* 탭 버튼 재사용 되는 곳 있으면 공통으로 뺄꺼임 */}
      <div className="flex flex-wrap text-body-sm text-brand-primary-500">
        {suggestedKeywords.map((suggestedKeyword) => (
          <button
            className="mr-3 my-2 bg-brand-primary-200 py-1 px-4 rounded-full"
            key={suggestedKeyword}
            onClick={() => handleClick(suggestedKeyword)}
          >
            {suggestedKeyword}
          </button>
        ))}
      </div>
    </div>
  )
}
