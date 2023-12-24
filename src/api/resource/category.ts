import { baseURL } from '../util/instance'

export async function fetchCategory() {
  const res = await fetch(`${baseURL}/items/category`)

  if (!res.ok) {
    throw new Error('category fetch failed')
  }

  return res.json()
}

export async function fetchCategoryItems(categoryName: string) {
  const res = await fetch(`${baseURL}/search/complexitem?categoryName=${categoryName}`)

  // if (!res.ok) {
  //   throw new Error('category items fetch failed')
  // }
  if (res.status === 404) {
    return { items: { content: [] } }
  }

  return res.json()
}
