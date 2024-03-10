'use client'

import CartPaymentButton from '@/components/feature/cart/cartPaymentButton'
import { useCartStore } from '@/components/provider/CartStoreProvider'
import { convertNumberFormat } from '@/lib/utils'
import { DELIVERY_CHARGE } from '@/types/payment'

export default function CartPaymentBill() {
  const { selectedItems, price, discountPrice } = useCartStore((state) => state.actions)
  return (
    <section className="flex w-full flex-col items-center gap-4 px-5 py-[18px] py-[30px]">
      <div className="flex w-full justify-between text-body-md">
        <span>상품금액</span>
        <div className="space-x-2">
          <span>{convertNumberFormat(price())}</span>
          <span>원</span>
        </div>
      </div>
      <div className="flex w-full justify-between text-body-md">
        <span>상품할인금액</span>
        <div className="space-x-2">
          <span>{convertNumberFormat(discountPrice())}</span>
          <span>원</span>
        </div>
      </div>
      <div className="flex w-full justify-between text-body-md">
        <span>배송비</span>
        <div className="space-x-2">
          <span>+{price() === 0 ? 0 : convertNumberFormat(DELIVERY_CHARGE)}</span>
          <span>원</span>
        </div>
      </div>
      <div className="h-px w-11/12 bg-gray-100" />
      <div className="mb-6 flex w-full justify-between">
        <span className="text-body-md">결제예정금액</span>
        <div className="space-x-2">
          {selectedItems().length ? (
            <span className="text-body-xl">{convertNumberFormat(price() + DELIVERY_CHARGE)}</span>
          ) : (
            <span className="text-body-xl">0</span>
          )}
          <span>원</span>
        </div>
      </div>
      <CartPaymentButton />
    </section>
  )
}
