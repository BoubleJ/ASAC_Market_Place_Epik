'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

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

  const handleSearch = (searchWord: string) => {
    router.push(`/search/${searchWord}`)
  }

  return (
    <>
      <div className="sticky top-0 z-30 w-96">
        <div className="flex h-16 gap-2 bg-white px-4 py-2">
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
