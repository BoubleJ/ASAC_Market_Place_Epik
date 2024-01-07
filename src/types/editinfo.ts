import { editInfoFormSchema } from '@/lib/schema/editInfo'
import { z } from 'zod'

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
