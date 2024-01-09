import { itemIdParam } from '@/app/items/[itemId]/layout'
import { addhelpfulParams, deleteWishParams } from '@/types/wish'

import { baseLocalURL, basePath, commonHeader } from '../util/instance'

export async function fetchItemDetails(itemId: number) {
  const res = await fetch(`${baseLocalURL}/items?itemId=${itemId}`)
  if (!res.ok) {
    throw new Error('Failed to fetch item details Data')
  }
  return res.json()
}
// routehandler로 ! (토큰 필요)
export async function fetchReviews(itemId: number) {
  const res = await fetch(`${baseLocalURL}/items/reviews?itemId=${itemId}`)
  if (!res.ok) {
    throw new Error(`failed to fetch review data${baseLocalURL}/items/reviews?itemId=${itemId}`)
  }
  return res.json()
}

export async function fetchHelpfulCount(body: addhelpfulParams) {
  // const res = await fetch(`${baseLocalURL}/items/reviews/helpful?itemId=${itemId}&reviewId=${reviewId}`, {
  const res = await fetch(`${basePath}/api/helpfulCount`, {
    method: 'POST',
    headers: commonHeader,
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    throw new Error('Failed')
  }
  const state = await res.json()
  console.log(state.msg, 'ㅎㅂㅎ')
  return state.msg
}

export async function fetchLessHelpCount(body: addhelpfulParams) {
  const res = await fetch(`${basePath}/api/helplessCount`, {
    method: 'POST',
    headers: commonHeader,
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    throw new Error('Failed')
  }
  const state = await res.json()
  console.log(state.msg, 'ㅎㅂㅎ')
  return state.msg
}

export async function addWish(itemId: number) {
  const res = await fetch(`${baseLocalURL}/items/yeswish?itemId=${itemId}`, {
    method: 'POST',
    headers: {
      ...commonHeader,
    },
  })
  return res
}

export async function addToWishList(body: itemIdParam) {
  const res = await fetch(`${basePath}/api/items/wish`, {
    method: 'POST',
    headers: commonHeader,
    body: JSON.stringify(body),
  })
  if (!res.ok) {
    throw new Error('Failed')
  }
  const state = await res.json()
  console.log(state.msg, 'ㅎㅂㅎ')
  console.log('ㅎㅂㅎ')
  return state.msg
}

export async function deleteFromWishList(body: deleteWishParams) {
  const res = await fetch(`${basePath}/api/items/deleteWish`, {
    method: 'POST',
    headers: commonHeader,
    body: JSON.stringify(body),
  })
  if (!res.ok) {
    throw new Error('Failed')
  }
  const state = await res.json()
  console.log(state.msg, 'ㅎㅂㅎ')
  console.log('ㅎㅂㅎ')
  return state.msg
}

export async function fetchWishList() {
  console.log('fetchWishList')
  const res = await fetch(`${basePath}/api/items/wishList`, {
    method: 'GET',
    headers: commonHeader,
  })

  if (!res.ok) {
    throw new Error('Failed!!!!!!!')
  }
  const response = await res.json()
  console.log('웅답은', response)
  return response
}
