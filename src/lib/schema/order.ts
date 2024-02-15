import { z } from 'zod'

import { AVAILABLE_PG_TYPE } from '@/types/payment'

// const phoneRegex = new RegExp(/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/)

export const orderFormSchema = z.object({
  // delivery_address
  // delivery_request
  // coupon
  payment_method: z.enum(AVAILABLE_PG_TYPE, { required_error: '결제수단을 선택해주세요.' }),
})

export type OrderFormInterface = z.infer<typeof orderFormSchema>
