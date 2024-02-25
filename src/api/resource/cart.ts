import { basePath, commonHeader } from '@/api/util/instance'
import { CartItemCheckParam } from '@/types/product'

export async function fetchGetCartItem() {
  const res = await fetch(`${basePath}/api/cart`, {
    headers: commonHeader,
  })

  if (res.status !== 200) {
    const errorMsg = await res.json()
    return errorMsg
  }

  const response = await res.json()
  return response.data
}

export async function fetchInsertCartItemById(itemId: number) {
  const res = await fetch(`${basePath}/api/cart/insert?itemId=${itemId}`, {
    method: 'POST',
    headers: commonHeader,
  })

  if (res.status !== 200) {
    const errorMsg = await res.json()
    return errorMsg
  }

  const response = await res.json()
  return response.msg
}

export async function fetchDeleteCartItemById(itemId: number) {
  const res = await fetch(`${basePath}/api/cart/delete?itemId=${itemId}`, {
    method: 'POST',
    headers: commonHeader,
  })

  if (res.status !== 200) {
    const errorMsg = await res.json()
    return errorMsg
  }

  const response = await res.json()
  return response.msg
}

export async function fetchIncreaseCartItemById(itemId: number) {
  const res = await fetch(`${basePath}/api/cart/item/add?itemId=${itemId}`, {
    method: 'POST',
    headers: commonHeader,
  })

  if (res.status !== 200) {
    const errorMsg = await res.json()
    return errorMsg
  }

  const response = await res.json()
  return response.msg
}

export async function fetchDecreaseCartItemById(cartId: number, itemId: number) {
  const res = await fetch(`${basePath}/api/cart/item/minus?cartId=${cartId}&itemId=${itemId}`, {
    method: 'POST',
    headers: commonHeader,
  })

  if (res.status !== 200) {
    const errorMsg = await res.json()
    return errorMsg
  }

  const response = await res.json()
  return response.msg
}

export async function fetchSelectCartItem(body: CartItemCheckParam) {
  const res = await fetch(`${basePath}/api/cart/check`, {
    method: 'PATCH',
    headers: commonHeader,
    body: JSON.stringify(body),
  })

  if (res.status !== 200) {
    const errorMsg = await res.json()
    return errorMsg
  }

  const response = await res.json()
  return response.msg
}
