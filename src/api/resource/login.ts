import { commonHeader } from '@/api/util/instance'
import { baseURL } from '@/api/util/instance'
import { ILoginParams, ISocialRegisterParams, IVerifyAndUpdateSocialLoginParams } from '@/types/login'

export async function fetchLogin(body: ILoginParams) {
  const res = await fetch(`${baseURL}/members/authenticate`, {
    method: 'POST',
    headers: commonHeader,
    body: JSON.stringify(body),
  })

  if (res.status !== 200) {
    const errorMsg = await res.text()
    return { errorMessage: errorMsg }
  }

  return await res.json()
}

export async function fetchVerifyAndUpdateSocialLogin(body: IVerifyAndUpdateSocialLoginParams) {
  const res = await fetch(`${baseURL}/members/verify-password`, {
    method: 'POST',
    headers: commonHeader,
    body: JSON.stringify(body),
  })

  if (res.status !== 200) {
    const errorMsg = await res.json()
    return { errorMessage: errorMsg.msg }
  }

  return await res.json()
}

export async function fetchSocialRegister(body: ISocialRegisterParams) {
  const res = await fetch(`${baseURL}/members/socialRegister`, {
    method: 'POST',
    headers: commonHeader,
    body: JSON.stringify(body),
  })

  if (res.status !== 200) {
    const errorMsg = await res.json()
    return { errorMessage: errorMsg.msg }
  }

  return await res.json()
}
