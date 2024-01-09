import { basePath, baseURL, commonHeader } from '../util/instance'

export async function fetchReviews(itemId: number) {
  const body = { itemId: itemId }
  const res = await fetch(`${basePath}/api/review`, {
    method: 'POST',
    headers: commonHeader,
    body: JSON.stringify(body),
  })
  if (!res.ok) {
    throw new Error(`failed to fetch review data${baseURL}/items/reviews?itemId=${itemId}`)
  }
  return res.json()
}
