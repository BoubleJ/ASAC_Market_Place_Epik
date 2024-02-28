// import { baseURL } from '../util/instance'

import { baseLocalURL } from '../util/instance'

export async function fetchCategory() {
  const res = await fetch(`${baseLocalURL}/items/category`)

  if (!res.ok) {
    throw new Error('category fetch failed')
  }

  return res.json()
}

export async function fetchCategoryItems(
  categoryName: string,
  brandParams: string | null,
  priceParams: string | null,
  page: number | null,
) {
  const res = await fetch(
    `${baseLocalURL}/search/complexitem?categoryName=${categoryName}${brandParams ? `&brand=${brandParams}` : ''}${
      priceParams ? `&priceRange=${priceParams}` : ''
    }${page ? `&page=${page}` : ''}`,
  )
  console.log(
    `${baseLocalURL}/search/complexitem?categoryName=${categoryName}${brandParams ? `&brand=${brandParams}` : ''}${
      priceParams ? `&priceRange=${priceParams}` : ''
    }${page ? `&page=${page}` : ''}`,
  )

  // if (!res.ok) {
  //   throw new Error('category items fetch failed')
  // }
  if (res.status === 404) {
    return { items: { content: [] } }
  }

  const data = await res.json()

  return { content: data.items.content, totalPages: data.items.totalPages }
}

export async function fetchCategoryFilterData(categoryName: string) {
  const res = await fetch(`${baseLocalURL}/search/counts?categoryName=${categoryName}`)

  if (!res.ok) {
    throw new Error('category items fetch failed')
  }

  return res.json()
}
