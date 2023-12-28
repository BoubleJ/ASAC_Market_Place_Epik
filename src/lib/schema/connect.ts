import { z } from 'zod'

// const passwordRegex = new RegExp(/^/)

export const ConnectFormSchema = z.object({
  email: z
    .string({ required_error: '필수 입력입니다.' })
    .min(1, { message: '이메일을 입력해주세요.' })
    .email({ message: '유효하지 않은 이메일 형식입니다.' }),
  password: z.string().min(8, { message: '비밀번호는 8자리이상을 입력해주세요.' }),
})
