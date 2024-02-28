/* eslint-disable react/no-children-prop */
'use client'

import { useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'

import { fetchCouponList } from '@/api/resource/coupon'
import CouponModal from '@/components/common/modal/CouponModal'
import OrderContainer from '@/components/feature/order/orderContainer'
import { useModalState } from '@/components/provider/modalProvider'
import { OrderFormInterface } from '@/lib/schema/order'
import { Coupon } from '@/types/coupon'

export default function OrderCoupon() {
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
  }

  const openCouponModal = () => {
    state.setModal(<CouponModal onCheck={handleSubmit} content={coupons} />)
    state.modalRef.current?.showModal()
  }

  const form = useFormContext<OrderFormInterface>()

  return (
    <OrderContainer>
      <div className="mb-[15px] ">
        <span className="text-body-base">쿠폰</span>
      </div>
      <div
        className="flex items-center justify-between rounded-md border-2 border-gray-200 bg-grayscale-50 text-grayscale-200"
        onClick={openCouponModal}
      >
        <span className="line-clamp-2 px-4 py-3 text-body-base">
          {!selectedCoupon
            ? `사용가능 쿠폰 ${coupons.length}장/전체 ${coupons.length}장`
            : `${selectedCoupon.couponName}`}
        </span>
      </div>
      {/* <FormField
        control={form.control}
        name="coupon"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel className="mb-[15px] text-body-base">쿠폰</FormLabel>
            <FormField
              control={form.control}
              name="coupon"
              render={({ field }) => (
                <FormItem className="flex items-center justify-between ">
                  <FormControl>
                    <Input
                      type="text"
                      placeholder={`사용가능 쿠폰 0장/전체 0장`}
                      className="line-clamp-2 rounded-md border-2 border-gray-200 bg-grayscale-50 px-4 py-3 text-body-base text-grayscale-200"
                      value={field.value || ''}
                      onChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </FormItem>
        )}
      /> */}
    </OrderContainer>
  )
}
