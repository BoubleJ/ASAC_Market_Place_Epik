import { ILoginParams, IVerifyAndUpdateSocialLoginParams } from '@/types/login'

export const encodeLoginForm = (data: ILoginParams): ILoginParams => {
  const { loginId, password } = data
  const loginRequestBody = {
    loginId: loginId,
    password: password,
  }
  return loginRequestBody
}

export const encodeVerifyAndUpdateSocialLoginForm = (data: {
  email: string
  password: string
}): IVerifyAndUpdateSocialLoginParams => {
  const { email, password } = data
  // const { password } = data
  const verifyAndUpdateSocialLoginRequestBody = {
    password: password,
    email: email,
    provider: 'kakao',
    providerId: process.env.KAKAO_PROVIDER_ID!,
  }
  return verifyAndUpdateSocialLoginRequestBody
}
