'use server'
import { revalidateTag } from 'next/cache'
import { cookies } from 'next/headers'

import { baseURL, commonHeader } from '@/api/util/instance'
import { Cart } from '@/types/product'
export const getCart = async () => {
  revalidateTag('cart')
  const requestHeaders = new Headers(commonHeader)
  const authToken = cookies().get('AUTH_TOKEN')?.value
  const hasCookies = cookies().has('AUTH_TOKEN')

  if (!hasCookies) {
    console.log('no cookies to fetch cart')
    return {
      cartId: 0,
      amount: 0,
      salesTotalAmount: 0,
      totalAmount: 0,
      cartItemDtos: [],
    }
  }

  requestHeaders.set('Authorization', `Bearer ${authToken}`)
  const res = await fetch(`${baseURL}/cart`, {
    headers: requestHeaders,
    cache: 'no-store',
    next: {
      tags: ['cart'],
    },
  })

  if (!res.ok) {
    console.log('Failed to initialize Cart', res.status)
    return { cartId: 0, amount: 0, salesTotalAmount: 0, totalAmount: 0, cartItemDtos: [] }
  }

  const cart: { data: Cart } = await res.json()
  console.log('fetch cart from server in cart page', cart)

  return cart.data
}
