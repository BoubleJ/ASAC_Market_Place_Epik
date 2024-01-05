import { commonHeader } from '@/api/util/instance'
import { ICheckEmailParams, ICheckUserIdParams, ISignUpPrams } from '@/types/signup'

export async function fetchCheckLoginId(body: ICheckUserIdParams): Promise<boolean> {
  const res = await fetch(`api/members/check-loginid`, {
    method: 'POST',
    headers: commonHeader,
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    throw new Error('Failed to check login id')
  }
  return await res.json()
}
export async function fetchCheckEmail(body: ICheckEmailParams): Promise<boolean> {
  const res = await fetch(`api/members/check-email`, {
    method: 'POST',
    headers: commonHeader,
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    throw new Error('Failed to check email')
  }

  return await res.json()
}

export async function fetchSignUp(body: ISignUpPrams) {
  const res = await fetch(`api/members/signup`, {
    method: 'POST',
    headers: commonHeader,
    body: JSON.stringify(body),
  })

  if (res.status === 409) {
    const errorMsg = await res.text()
    return { errorMessage: errorMsg }
  }

  return await res.json()
}
