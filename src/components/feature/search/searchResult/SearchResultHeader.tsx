'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import CartLinkIcon from '@/components/feature/cart/CartLinkIcon'
import SearchBar from '@/components/feature/search/SearchBar'
import { ChevronLeft } from '@/components/icons'

import AutoComplete from '../AutoComplete'

interface recentWordInterface {
  id: number
  word: string
}

export default function SearchResultHeader({ searchedWord }: { searchedWord: string }) {
  const [isBarClicked, setIsBarClicked] = useState(false)
  const [searchingWord, setSearchingWord] = useState(searchedWord)
  const router = useRouter()
  const [recentWords, setRecentWords] = useState<recentWordInterface[]>([])

  useEffect(() => {
    const result = localStorage.getItem('keywords') || '[]'
    setRecentWords(JSON.parse(result))
  }, [])

  const handleSearch = (searchWord) => {
    handleAddKeyword(searchWord)

    router.push(`/search/${searchWord}`)
  }

  useEffect(() => {
    localStorage.setItem('keywords', JSON.stringify(recentWords))
  }, [recentWords])

  const handleAddKeyword = (searchWord: string) => {
    const newKeyword = {
      id: Date.now(),
      word: searchWord,
    }
    setRecentWords([newKeyword, ...recentWords])
  }

  return (
    <>
      <div className="sticky top-0 w-96 z-30">
        <div className="h-16 px-4 py-2 flex gap-2 bg-white">
          <button className="font-bold" onClick={() => router.push('/search')}>
            <ChevronLeft width={'1.5rem'} height={'1.5rem'} fill="transparent" />
          </button>
          <SearchBar
            setSearchingWord={setSearchingWord}
            setIsBarClicked={setIsBarClicked}
            searchedWord={searchedWord}
            handleEnter={handleSearch}
          />
          <button className="font-bold">
            <CartLinkIcon />
          </button>
        </div>
      </div>
      {isBarClicked && searchingWord && <AutoComplete searchingWord={searchingWord} />}
    </>
  )
}
