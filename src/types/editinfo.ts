import { z } from 'zod'

import { editInfoFormSchema } from '@/lib/schema/editInfo'

export interface IEditInfoForm {
  form: z.infer<typeof editInfoFormSchema>
}

export interface EditInfoParams {
  loginId: string
  password: string
  newPassword: string
  newPasswordCheck: string
  memberName: string
  email: string
  phoneNumber: string
}
