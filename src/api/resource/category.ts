// import { baseURL } from '../util/instance'

import { baseLocalURL } from '../util/instance'

export async function fetchCategory() {
  const res = await fetch(`${baseLocalURL}/items/category`)

  if (!res.ok) {
    throw new Error('category fetch failed')
  }

  return res.json()
}

export async function fetchCategoryItems(categoryName: string, brandParams: string | null, priceParams: string | null) {
  const res = await fetch(
    `${baseLocalURL}/search/complexitem?categoryName=${categoryName}${brandParams ? `&brand=${brandParams}` : ''}${
      priceParams ? `&price=${priceParams}` : ''
    }`,
  )

  // if (!res.ok) {
  //   throw new Error('category items fetch failed')
  // }
  if (res.status === 404) {
    return { items: { content: [] } }
  }

  return res.json()
}

export async function fetchCategoryFilterData(categoryName: string) {
  const res = await fetch(`${baseLocalURL}/search/counts?categoryName=${categoryName}`)

  if (!res.ok) {
    throw new Error('category items fetch failed')
  }

  return res.json()
}
