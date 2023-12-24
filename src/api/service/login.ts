import { ILoginParams } from '@/types/login'

export const encodeLoginForm = (data: ILoginParams): ILoginParams => {
  const { loginId, password } = data
  const loginRequestBody = {
    loginId: loginId,
    password: password,
  }
  return loginRequestBody
}
