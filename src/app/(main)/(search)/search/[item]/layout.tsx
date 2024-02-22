import React from 'react'

import SearchResultHeader from '@/components/feature/search/searchResult/SearchResultHeader'

export default function SearchResultLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { item: string }
}) {
  const decodedItem = decodeURIComponent(params.item)

  return (
    <>
      <SearchResultHeader searchedWord={decodedItem} />
      {children}
    </>
  )
}
