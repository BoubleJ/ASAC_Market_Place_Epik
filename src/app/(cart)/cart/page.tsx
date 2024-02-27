import { getCart } from '@/api/server/cart'
import { convertCartitemDtosToCartItem } from '@/api/service/cart'
import CartStoreInitializer from '@/components/common/storeInitializers/CartStoreInitializer'
import CartHeader from '@/components/feature/cart/cartHeader'
import CartItemList from '@/components/feature/cart/cartItemList'
import CartPaymentBill from '@/components/feature/cart/cartPaymentBill'
import SelectAllArea from '@/components/feature/cart/selectAllArea'
import { useCartStore } from '@/store/client/cartSlice'

export const dynamic = 'force-dynamic'

export default async function CartPage() {
  const cart = await getCart()
  useCartStore.setState({ cart: convertCartitemDtosToCartItem(cart.cartItemDtos), cartId: cart.cartId })
  console.log(cart)

  return (
    <>
      <CartStoreInitializer cart={cart.cartItemDtos} cartId={cart.cartId} />
      <div className="w-full">
        <CartHeader />
        <SelectAllArea />
      </div>
      <CartItemList />
      <CartPaymentBill />
    </>
  )
}
