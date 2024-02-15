import { convertCartitemDtosToCartItem } from '@/api/service/cart'
import CartStoreInitializer from '@/components/common/storeInitializers/CartStoreInitializer'
import CartHeader from '@/components/feature/cart/cartHeader'
import CartItemList from '@/components/feature/cart/cartItemList'
import CartPaymentBill from '@/components/feature/cart/cartPaymentBill'
import SelectAllArea from '@/components/feature/cart/selectAllArea'

import { useCartStore } from '../../../store/client/cartSlice'
import { getCart } from './page'

export default async function CartPage() {
  const cart = await getCart()
  const { setCart } = useCartStore()
  convertCartitemDtosToCartItem()
  // setCart((cart)
  return (
    <>
      <CartStoreInitializer cart={cart} />
      <div className="w-full">
        <CartHeader />
        <SelectAllArea />
      </div>
      <CartItemList />
      <CartPaymentBill />
    </>
  )
}
