'use client'
import React, { useRef } from 'react'

import { Search, XCircle } from '@/components/icons'
import { Input } from '@/components/ui/input'

export default function SearchBar({
  setSearchingWord,
  setIsBarClicked,
  searchedWord,
  handleEnter,
}: {
  setSearchingWord: (searchingWorld: string) => void
  setIsBarClicked: (isBarClicked: boolean) => void
  searchedWord?: string
  handleEnter: (searchWord: string) => void
}) {
  const inputRef = useRef<HTMLInputElement | null>(null) // Ref 생성

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (inputRef.current) {
      handleEnter(inputRef.current.value)
    }
  }

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    if (inputRef.current) {
      setSearchingWord(inputRef.current.value)
    }
  }

  const removeInput = () => {
    if (inputRef.current) {
      inputRef.current.value = ''
      setSearchingWord('')
    }
  }

  return (
    <form className="relative flex h-full w-full" onSubmit={handleSearch} onClick={() => setIsBarClicked(true)}>
      <div className="absolute flex items-center left-3 h-full text-grayscale-300 ">
        <Search width={'1.2rem'} height={'1.2rem'} fill="transparent" />
      </div>
      <button
        type="button"
        onClick={removeInput}
        className="absolute flex items-center right-3 h-full text-grayscale-300"
      >
        <XCircle width={'1.2rem'} height={'1.2rem'} fill="transparent" />
      </button>
      <Input
        type="text"
        name="search"
        placeholder="검색어를 입력해주세요"
        className="h-full pl-10 bg-gray-100 border-0 focus-visible:ring-0"
        onChange={onChange}
        defaultValue={searchedWord}
        ref={inputRef}
      />
    </form>
  )
}
