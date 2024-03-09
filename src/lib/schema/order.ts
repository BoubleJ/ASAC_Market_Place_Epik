import { z } from 'zod'

import { AVAILABLE_PG_TYPE } from '@/types/payment'

// const phoneRegex = new RegExp(/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/)

export const orderFormSchema = z.object({
  // delivery_request
  coupon: z.number().nullable().optional(),
  delivery_address: z.object({
    address: z.string(),
    zipcode: z.string(),
    detail_address: z
      .string({ required_error: '상세주소를 입력해주세요' })
      .max(100, { message: '100자 이내로 입력해주세요' }),
  }),
  payment_method: z.enum(AVAILABLE_PG_TYPE, { required_error: '결제수단을 선택해주세요.' }),
})

export type OrderFormInterface = z.infer<typeof orderFormSchema>
