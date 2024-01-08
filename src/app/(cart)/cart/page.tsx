import { cookies } from 'next/headers'

import { baseURL, commonHeader } from '@/api/util/instance'
import CartHeader from '@/components/feature/cart/cartHeader'
import CartItemList from '@/components/feature/cart/cartItemList'
import CartPaymentBill from '@/components/feature/cart/cartPaymentBill'
import SelectAllArea from '@/components/feature/cart/selectAllArea'
import { Cart } from '@/types/product'

export const runtime = 'edge'

const getCart = async () => {
  const requestHeaders = new Headers(commonHeader)
  const authToken = cookies().get('AUTH_TOKEN')?.value
  const hasCookies = cookies().has('AUTH_TOKEN')

  if (hasCookies) {
    requestHeaders.set('Authorization', `Bearer ${authToken}`)
  }

  const res = await fetch(`${baseURL}/cart`, {
    headers: requestHeaders,
  })

  if (!res.ok) {
    console.log('Failed to initialize Cart', res.status)
    return { cartId: 0, amount: 0, salesTotalAmount: 0, totalAmount: 0, cartItemDtos: [] }
  }

  const cart: { data: Cart } = await res.json()
  console.log('fetch cart from server in cart page', cart)

  return cart.data
}
export default async function CartPage() {
  const cart = await getCart()
  return (
    <>
      <div className="w-full">
        <CartHeader />
        <SelectAllArea />
      </div>
      {/* <Suspense fallback={}> */}
      <CartItemList content={cart} />
      {/* </Suspense> */}
      <CartPaymentBill />
    </>
  )
}
