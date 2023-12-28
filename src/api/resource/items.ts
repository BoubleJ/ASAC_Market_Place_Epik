import { baseURL, commonHeader } from '../util/instance'

export async function fetchItemDetails(itemId: number) {
  const res = await fetch(`http://localhost:3000/api/items?itemId=${itemId}`)
  if (!res.ok) {
    throw new Error('Failed to fetch item details Data')
  }
  return res.json()
}

export async function fetchReviews(itemId: number) {
  const res = await fetch(`http://localhost:3000/api/items/reviews?itemId=${itemId}`)
  if (!res.ok) {
    throw new Error(`failed to fetch review data${baseURL}/items/reviews?itemId=${itemId}`)
  }
  return res.json()
}

export async function fetchHelpfulCount(itemId: number, reviewId: number) {
  const res = await fetch(`http://localhost:3000/api/items/reviews/helpful?itemId=${itemId}&reviewId=${reviewId}`, {
    method: 'POST',
    headers: commonHeader,
  })

  if (!res.ok) {
    throw new Error('Failed')
  }

  return res
}

export async function fetchLessHelpCount(itemId: number, reviewId: number) {
  const res = await fetch(`http://localhost:3000/api/items/reviews/helpless?itemId=${itemId}&reviewId=${reviewId}`, {
    method: 'POST',
    headers: commonHeader,
  })

  if (!res.ok) {
    throw new Error('Failed')
  }

  return res
}

export async function addWish(itemId: number) {
  const res = await fetch(`http://localhost:3000/api/items/yeswish?itemId=${itemId}`, {
    method: 'POST',
    headers: {
      ...commonHeader,
    },
  })
  return res
}
