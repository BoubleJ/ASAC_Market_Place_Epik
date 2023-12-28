import { commonHeader } from '@/api/util/instance'
import { baseURL } from '@/api/util/instance'

//localhost:8080/api/cart
export async function fetchGetCartItem() {
  const res = await fetch(`${baseURL}/cart`, {
    headers: commonHeader,
  })

  if (res.status !== 200) {
    const errorMsg = await res.text()
    return { errorMessage: errorMsg }
  }

  return await res.json()
}

//localhost:8080/api/cart/insert?itemId=1
export async function fetchInsertCartItemById(itemId: string) {
  const res = await fetch(`${baseURL}/cart/insert?itemId=${itemId}`, {
    method: 'POST',
    headers: commonHeader,
  })

  if (res.status !== 200) {
    const errorMsg = await res.text()
    return { errorMessage: errorMsg }
  }

  return await res.json()
}

// http://localhost:8080/api/cart/delete?itemId=1
export async function fetchDeleteCartItemById(itemId: string) {
  const res = await fetch(`${baseURL}/cart/delete?itemId=${itemId}`, {
    method: 'POST',
    headers: commonHeader,
  })

  if (res.status !== 200) {
    const errorMsg = await res.text()
    return { errorMessage: errorMsg }
  }

  return await res.json()
}

// http://localhost:8080/api/cart/item/add?itemId=1
// http://localhost:8080/api/cart/item/minus?cartId=1&itemId=2
// export async function fetchIncreaseCartItemById(cartId: string, itemId: string) {
// const res = await fetch(`${baseURL}/cart/item/add?cartId=${cartId}?itemId=${itemId}`, {
export async function fetchIncreaseCartItemById(itemId: string) {
  const res = await fetch(`${baseURL}/cart/item/add?itemId=${itemId}`, {
    method: 'POST',
    headers: commonHeader,
  })

  if (res.status !== 200) {
    const errorMsg = await res.text()
    return { errorMessage: errorMsg }
  }

  return await res.json()
}

// http://localhost:8080/api/cart/item/minus?cartId=1&itemId=2
export async function fetchDecreaseCartItemById(cartId: string, itemId: string) {
  const res = await fetch(`${baseURL}/cart/item/minus?cartId=${cartId}?itemId=${itemId}`, {
    method: 'POST',
    headers: commonHeader,
  })

  if (res.status !== 200) {
    const errorMsg = await res.text()
    return { errorMessage: errorMsg }
  }

  return await res.json()
}
