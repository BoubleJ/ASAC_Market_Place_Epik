import React from 'react'

import { recentWordInterface } from '@/app/(main)/(search)/search/page'

export default function RecentSearches({
  handleClick,
  recentWords,
  handleRemove,
}: {
  handleClick: (clickedWord: string) => void
  recentWords: recentWordInterface[]
  handleRemove: (id: number) => void
}) {
  return (
    <div className="flex flex-col gap-3">
      <header className=" text-headline3">추천검색어</header>
      <div className="flex flex-wrap gap-2 text-body-sm text-gray-500 ">
        {recentWords.length ? (
          recentWords.map((recentWord) => (
            <div key={recentWord.id} className="my-2 mr-3 flex gap-2 rounded-full bg-gray-100 px-4 py-1">
              <button onClick={() => handleClick(recentWord.word!)}>{recentWord.word}</button>
              <button className="mr-auto" type="button" onClick={() => handleRemove(recentWord.id)}>
                x
              </button>
            </div>
          ))
        ) : (
          <div>최근 검색어가 없습니다</div>
        )}
      </div>
    </div>
  )
}
