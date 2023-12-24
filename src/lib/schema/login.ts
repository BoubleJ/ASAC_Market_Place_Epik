import { z } from 'zod'

// const passwordRegex = new RegExp(/^/)

export const LoginFormSchema = z.object({
  loginId: z.string().min(2, {
    message: '아이디는 2글자이상을 입력해주세요.',
  }),
  password: z.string().min(8, { message: '비밀번호는 8자리이상을 입력해주세요.' }),
})
