'use client'

import Image from 'next/image'
import { useFormContext } from 'react-hook-form'

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { AVAILABLE_PG_TYPE } from '@/types/payment'

export function OrderPaymentMethod() {
  const form = useFormContext()

  return (
    <>
      <FormField
        control={form.control}
        name="payment_method"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel className="mb-[15px] text-body-base">결제 수단</FormLabel>
            <FormControl>
              <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col gap-4">
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value={`${AVAILABLE_PG_TYPE[0]}`} className="border-grayscale-400" />
                  </FormControl>
                  <FormLabel className="text-body-md text-grayscale-700">신용카드</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value={`${AVAILABLE_PG_TYPE[1]}`} className="border-grayscale-400" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    <Image src={'/images/kakaopay_icon.png'} alt={''} width={48} height={48} />
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem disabled value={``} className="border-grayscale-300" />
                  </FormControl>
                  <FormLabel className="text-body-md text-grayscale-300">계좌이체</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem disabled value={``} className="border-grayscale-300" />
                  </FormControl>
                  <FormLabel className="text-body-md text-grayscale-300">가상계좌</FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  )
}

/**
 * 일반결제 test에서는 1개의 pg만 지정 가능
 * - pg
 * -- toss payments
 *    선정이유: 업계 점유율 1위
 */
