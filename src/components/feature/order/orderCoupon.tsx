'use client'

import { useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'

import { fetchCouponList } from '@/api/resource/coupon'
import CouponModal from '@/components/common/modal/CouponModal'
import OrderContainer from '@/components/feature/order/orderContainer'
import { useModalState } from '@/components/provider/modalProvider'
import { FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { OrderFormInterface } from '@/lib/schema/order'
import { Coupon } from '@/types/coupon'

export default function OrderCoupon() {
  const form = useFormContext<OrderFormInterface>()

  const [selectedCoupon, setSelectedCoupon] = useState<Coupon | null>(null)
  const [coupons, setCoupons] = useState<Coupon[]>([])
  const [errorMsg, setErrorMsg] = useState<string>('')

  const state = useModalState()

  useEffect(() => {
    fetchCouponList().then((res) => {
      if (res.msg) {
        setErrorMsg(res.msg)
        return
      }
      setCoupons(res)
    })
  }, [])

  const handleSubmit = (coupon: Coupon) => {
    console.log(coupon)
    setSelectedCoupon(coupon)
    form.setValue('coupon', coupon.id)
  }
  const isCouponEmpty = (coupons: Coupon[]) => {
    return coupons.length === 0 ? true : false
  }

  const openCouponModal = () => {
    state.setModal(<CouponModal content={coupons} onCheck={handleSubmit} />)
    state.modalRef.current?.showModal()
  }

  return (
    <OrderContainer>
      <FormField
        control={form.control}
        name="coupon"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel className="mb-[15px] text-body-base">쿠폰</FormLabel>
            <FormField
              control={form.control}
              name="coupon"
              render={({ field }) => (
                <FormItem className="flex items-center justify-between">
                  <button
                    className="line-clamp-2 w-full rounded-md border-2 border-gray-200 bg-grayscale-50 px-4 py-3 text-body-base text-grayscale-200"
                    onClick={openCouponModal}
                    disabled={isCouponEmpty(coupons)}
                  >
                    {!selectedCoupon
                      ? `사용가능 쿠폰 ${coupons.length}장/전체 ${coupons.length}장`
                      : `${selectedCoupon.couponName}`}
                  </button>
                  <FormControl>
                    <Input type="text" className="hidden" value={field.value || ''} />
                  </FormControl>
                </FormItem>
              )}
            />
          </FormItem>
        )}
      />
    </OrderContainer>
  )
}
