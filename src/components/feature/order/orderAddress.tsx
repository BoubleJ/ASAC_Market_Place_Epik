'use client'

import { useFormContext } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { openDaumPostcode } from '@/lib/post/daumPost'
import { OrderFormInterface } from '@/lib/schema/order'

export default function OrderAddress() {
  const form = useFormContext<OrderFormInterface>()
  return (
    <>
      <FormField
        control={form.control}
        name="delivery_address"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel className="mb-[15px] text-body-base">배송지</FormLabel>
            <div className="flex items-center justify-between gap-2">
              <FormField
                control={form.control}
                name="delivery_address.zipcode"
                render={({ field }) => (
                  <FormItem className="basis-3/4 space-y-3">
                    <FormControl>
                      <Input type="text" placeholder="우편번호" value={field.value || ''} onChange={field.onChange} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                variant={'ghost'}
                size={'sm'}
                className="basis-1/4 text-grayscale-700"
                onClick={() => openDaumPostcode(form)}
              >
                주소선택
              </Button>
            </div>
            <FormField
              control={form.control}
              name="delivery_address.address"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormControl>
                    <Input
                      type="text"
                      className="line-clamp-2 text-body-base"
                      placeholder="주소"
                      value={field.value || ''}
                      onChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="delivery_address.detail_address"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormControl>
                    <Input
                      type="text"
                      className="line-clamp-2 text-body-base"
                      placeholder="상세주소"
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </FormItem>
        )}
      />
    </>
  )
}
