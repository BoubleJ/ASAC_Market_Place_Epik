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
  const provider = getCookieValue('provider') // 쿠키에서 프로바이더 값 읽기
  const providerId = getCookieValue('providerId') // 쿠키에서 프로바이더 ID 값 읽기
  const { email, password } = data
  const verifyAndUpdateSocialLoginRequestBody = {
    password: password,
    email: email,
    provider: provider,
    providerId: providerId,
  }
  return verifyAndUpdateSocialLoginRequestBody
}

export const encodeSocialRegisterForm = (data: ISignUpForm): ISocialRegisterParams => {
  const { userId, userName, email, password } = data.form
  const providerEmail = getCookieValue('providerEmail') // 쿠키에서 이메일 값 읽기
  const provider = getCookieValue('provider') // 쿠키에서 프로바이더 값 읽기
  const providerId = getCookieValue('providerId') // 쿠키에서 프로바이더 ID 값 읽기
  const socialRegisterRequestBody = {
    memberName: userName,
    loginId: userId,
    password: password,
    email: email,
    providerEmail: providerEmail,
    provider: provider,
    providerId: providerId,
  }
  return socialRegisterRequestBody
}

function getCookieValue(name: string) {
  // 쿠키에서 특정 이름의 값을 찾는 함수
  let matches = document.cookie.match(
    new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'),
  )
  return matches ? decodeURIComponent(matches[1]) : ''
}
