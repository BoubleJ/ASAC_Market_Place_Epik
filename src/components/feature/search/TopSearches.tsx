import React from 'react'

const topKeywords = [
  '스콘',
  '푸딩',
  '딸기라떼',
  '루이보스',
  '크로와상',
  '토마토',
  '복숭아',
  '요거트',
  '그레놀라',
  '훠궈',
]

export default function TopSearches({ handleClick }: { handleClick: (clickedWord: string) => void }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <header className=" text-headline3">급상승 검색어</header>
        <p className=" text-body-xs font-medium text-grayscale-400">최근 1시간 동안 검색 횟수가 급상승했어요!</p>
      </div>
      <div className="flex flex-col gap-3 px-1">
        {topKeywords.map((topKeyword, index) => (
          <div key={index}>
            <button className="flex gap-4" onClick={() => handleClick(topKeyword)}>
              <span className=" text-title-md text-brand-primary-500">{index + 1}</span>{' '}
              <span className="text-body-md font-normal">{topKeyword}</span>
            </button>
            <div className="border-b border-grayscale-50 pt-1"></div>
          </div>
        ))}
      </div>
    </div>
  )
}
