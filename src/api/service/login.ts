import { ILoginParams, ISocialRegisterParams, IVerifyAndUpdateSocialLoginParams } from '@/types/login'
import { ISignUpForm } from '@/types/signup'

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
  const verifyAndUpdateSocialLoginRequestBody = {
    password: password,
    email: email,
    provider: 'kakao',
    providerId: process.env.KAKAO_PROVIDER_ID!,
  }
  return verifyAndUpdateSocialLoginRequestBody
}

export const encodeSocialRegisterForm = (data: ISignUpForm): ISocialRegisterParams => {
  const { userId, userName, email, password } = data.form
  const socialRegisterRequestBody = {
    memberName: userName,
    loginId: userId,
    password: password,
    email: email,
    providerEmail: `${process.env.KAKAO_PROVIDER_EMAIL}`,
    provider: 'kakao',
    providerId: `${process.env.KAKAO_PROVIDER_ID}`,
  }
  return socialRegisterRequestBody
}
