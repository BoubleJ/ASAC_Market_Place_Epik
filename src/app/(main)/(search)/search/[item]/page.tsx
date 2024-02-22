import React from 'react'

// import { fetchSearchItemsData } from '@/api/resource/search'
import { fetchIsEmpty, fetchSearchItemsData } from '@/api/resource/search'
import SearchFilter from '@/components/feature/search/SearchFilter'
import EmptySearchResult from '@/components/feature/search/searchResult/EmptySearchResult'
import SearchedItemList from '@/components/feature/search/searchResult/SearchedItemList'

export default async function SearchResultPage({
  params,
  searchParams,
}: {
  params: { item: string }
  searchParams: {
    ['카테고리']: string | null
    ['브랜드']: string | null
    ['가격']: string | null
    ['page']: number | null
  }
}) {
  const decodedItem = decodeURIComponent(params.item)

  // const [isSearchResultEmpty, setIsSearchResultEmpty] = useState(false)

  // --------------------------

  const brandParams = searchParams?.['브랜드']
  const priceParams = searchParams?.['가격']
  const categoryParams = searchParams?.['카테고리']
  const page = searchParams?.['page']

  // useEffect(() => {
  //   fetchSearchItemsData(searchword, categoryParams, brandParams, priceParams)
  //     .then((data) => {
  //       setProductList(data.items.content.length)
  //     })
  //     .catch((error) => {
  //       console.error('data fetch 실패', error)
  //     })
  // }, [categoryParams, brandParams, priceParams, searchword])
  // -----------------------------
  // let isSearchResultEmpty = false

  const isSearchResultEmpty = await fetchIsEmpty(decodedItem)
  const searchedItems = await fetchSearchItemsData(decodedItem, categoryParams, brandParams, priceParams, page)

  return (
    <>
      {!isSearchResultEmpty && (
        <div>
          <SearchFilter itemLength={searchedItems.content.length} searchWord={decodedItem} />

          <SearchedItemList />
        </div>
      )}
      {isSearchResultEmpty && <EmptySearchResult />}
    </>
  )
}
