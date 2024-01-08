import { commonHeader } from '@/api/util/instance'
import { ILoginParams, ISocialRegisterParams, IVerifyAndUpdateSocialLoginParams } from '@/types/login'

import { basePath } from '../util/instance'

export async function fetchLogin(body: ILoginParams) {
  const res = await fetch(`${basePath}/api/members/authenticate`, {
    method: 'POST',
    headers: commonHeader,
    body: JSON.stringify(body),
  })

  if (res.status !== 200) {
    const errorMsg = await res.json()
    return { errorMessage: errorMsg.msg }
  }
  const respnse = await res.json()
  return respnse
}

export async function fetchVerifyAndUpdateSocialLogin(body: IVerifyAndUpdateSocialLoginParams) {
  const res = await fetch(`${basePath}/api/members/verify-password`, {
    method: 'POST',
    headers: commonHeader,
    body: JSON.stringify(body),
  })

  if (res.status !== 200) {
    const errorMsg = await res.json()
    return { errorMessage: errorMsg.msg }
  }

  const respnse = await res.json()
  return respnse
}

export async function fetchSocialRegister(body: ISocialRegisterParams) {
  const res = await fetch(`${basePath}/api/members/socialRegister`, {
    method: 'POST',
    headers: commonHeader,
    body: JSON.stringify(body),
  })

  if (res.status !== 200) {
    const errorMsg = await res.json()
    return { errorMessage: errorMsg.msg }
  }
  const respnse = await res.json()
  return respnse
}
