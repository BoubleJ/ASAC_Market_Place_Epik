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
      <div className="flex gap-2 flex-wrap text-gray-500 text-body-sm ">
        {recentWords.length ? (
          recentWords.map((recentWord) => (
            <div key={recentWord.id} className="flex gap-2 mr-3 my-2 bg-gray-100 py-1 px-4 rounded-full">
              <button onClick={() => handleClick(recentWord.word)}>{recentWord.word}</button>
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
