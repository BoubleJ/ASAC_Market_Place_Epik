import { baseURL, commonHeader } from '../util/instance'

export async function fetchItemDetails(itemId: number) {
  const res = await fetch(`${baseURL}/items?itemId=${itemId}`)
  if (!res.ok) {
    throw new Error('Failed to fetch item details Data')
  }
  return res.json()
}

export async function fetchReviews(itemId: number) {
  const res = await fetch(`${baseURL}/items/reviews?itemId=${itemId}`)
  if (!res.ok) {
    throw new Error(`failed to fetch review data${baseURL}/items/reviews?itemId=${itemId}`)
  }
  return res.json()
}

export async function fetchHelpfulCount(itemId: number, reviewId: number) {
  const res = await fetch(`${baseURL}/items/reviews/helpful?itemId=${itemId}&reviewId=${reviewId}`, {
    method: 'POST',
    headers: commonHeader,
  })

  if (!res.ok) {
    throw new Error('Failed')
  }

  return res
}

export async function fetchLessHelpCount(itemId: number, reviewId: number) {
  const res = await fetch(`${baseURL}/items/reviews/helpless?itemId=${itemId}&reviewId=${reviewId}`, {
    method: 'POST',
    headers: commonHeader,
  })

  if (!res.ok) {
    throw new Error('Failed')
  }

  return res
}
