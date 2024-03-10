'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import AutoComplete from '@/components/feature/search/AutoComplete'
import SearchBar from '@/components/feature/search/SearchBar'
import SearchHeader from '@/components/feature/search/SearchHeader'
import RecentSearches from '@/components/feature/search/searchResult/RecentSearches'
import SuggestedSearches from '@/components/feature/search/SuggestedSearches'
import TopSearches from '@/components/feature/search/TopSearches'
import { ChevronLeft } from '@/components/icons'

export interface recentWordInterface {
  id: number
  word: string | undefined
}

export default function SearchPage() {
  const router = useRouter()
  const [isBarClicked, setIsBarClicked] = useState(false)
  const [searchingWord, setSearchingWord] = useState('')
  const [recentWords, setRecentWords] = useState<recentWordInterface[]>([])

  useEffect(() => {
    const result = localStorage.getItem('keywords') || '[]'
    setRecentWords(JSON.parse(result))
  }, [])

  const handleSearch = (searchWord: string) => {
    router.push(`/search/${searchWord}`)
  }

  const handleRemoveKeyword = (id: number) => {
    const newRecentWords = recentWords.filter((recentWord) => {
      return recentWord.id !== id
    })
    setRecentWords(newRecentWords)
    localStorage.setItem('keywords', JSON.stringify(recentWords))
  }

  return (
    <>
      <div className="sticky top-0 z-30">
        {!isBarClicked && <SearchHeader />}
        <div className="flex gap-2 bg-white px-4 py-2">
          {isBarClicked && (
            <button className="font-bold" onClick={() => setIsBarClicked(false)}>
              <ChevronLeft width={'1.5rem'} height={'1.5rem'} fill="transparent" />
            </button>
          )}
          <SearchBar setSearchingWord={setSearchingWord} setIsBarClicked={setIsBarClicked} handleEnter={handleSearch} />
        </div>
      </div>
      {/* 자동완성  */}
      {isBarClicked && searchingWord && <AutoComplete searchingWord={searchingWord} />}
      {/* ---------------------------최근검색어 */}
      <div className="flex w-full flex-col gap-8 px-4 py-2">
        <RecentSearches handleClick={handleSearch} recentWords={recentWords} handleRemove={handleRemoveKeyword} />
        <SuggestedSearches handleClick={handleSearch} />
        <TopSearches handleClick={handleSearch} />
      </div>
    </>
  )
}
