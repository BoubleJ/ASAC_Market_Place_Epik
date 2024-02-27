'use client'

import { useFormContext } from 'react-hook-form'

import OrderContainer from '@/components/feature/order/orderContainer'
import { OrderFormInterface } from '@/lib/schema/order'

export default function OrderCoupon() {
  const form = useFormContext<OrderFormInterface>()

  return (
    <OrderContainer>
      <div className="mb-[15px] ">
        <span className="text-body-base">쿠폰</span>
      </div>
      <div className="flex items-center justify-between rounded-md border-2 border-gray-200 bg-grayscale-50 text-grayscale-200">
        <span className="line-clamp-2 px-4 py-3 text-body-base">사용가능 쿠폰 0장/전체 0장</span>
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
