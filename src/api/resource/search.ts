import { baseURL } from '@/api/util/instance'

export async function fetchSearchItemsData(
  searchWord: string,
  categoryParams: string | null,
  brandParams: string | null,
  priceParams: string | null,
) {
  const res = await fetch(
    `${baseURL}/search/complexitem?name=${searchWord}${categoryParams ? `&categoryName=${categoryParams}` : ''}${
      brandParams ? `&brand=${brandParams}` : ''
    }${priceParams ? `&price=${priceParams}` : ''}`,
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return await res.json()
}

export async function fetchIsEmpty(searchWord: string) {
  const res = await fetch(`${baseURL}/search/complexitem?name=${searchWord}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const data = await res.json()
  const isEmpty = data.items.empty

  return isEmpty
}

export async function fetchFilterData(params: string) {
  const res = await fetch(`${baseURL}/search/counts?name=${params}`)
  //localhost:8080/api/search/counts?name=아

  if (!res.ok) {
    throw new Error(`Failed to fetch filter`)
  }
  //filter data with params~~~
  return await res.json()
  //  return filterData
}

export async function fetchAutoCompleteWords(searchingWord: string) {
  // const res = await fetch(`/api/search/autokeyword?keyword=${searchingWord}`)
  const res = await fetch(`${baseURL}/search/autokeyword?keyword=${searchingWord}&limit=5`)
  if (!res.ok) {
    throw new Error('Failed to fetch')
  }
  const autoCompleteWords = await res.json()
  return autoCompleteWords
}
