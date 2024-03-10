import CartHeader from '@/components/feature/cart/cartHeader'
import CartItemList from '@/components/feature/cart/cartItemList'
import CartPaymentBill from '@/components/feature/cart/cartPaymentBill'
import SelectAllArea from '@/components/feature/cart/selectAllArea'

export const dynamic = 'force-dynamic'

export default async function CartPage() {
  return (
    <>
      <div className="w-full">
        <CartHeader />
        <SelectAllArea />
      </div>
      <CartItemList />
      <CartPaymentBill />
    </>
  )
}
