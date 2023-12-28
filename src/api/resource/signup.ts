import { commonHeader } from '@/api/util/instance'
import { baseURL } from '@/api/util/instance'
import { ICheckEmailParams, ICheckUserIdParams, ISignUpPrams } from '@/types/signup'

export async function fetchCheckLoginId(body: ICheckUserIdParams): Promise<boolean> {
  const res = await fetch(`${baseURL}/members/check-loginid`, {
    method: 'POST',
    headers: commonHeader,
    body: JSON.stringify(body),
  })
  const res2 = await fetch(`/api/members/check-loginId`, {
    method: 'POST',
    headers: commonHeader,
    body: JSON.stringify(body),
  })
  console.log(await res2.json)

  if (!res.ok) {
    throw new Error('Failed to check login id')
  }

  return res.json()
}

export async function fetchCheckEmail(body: ICheckEmailParams): Promise<boolean> {
  const res = await fetch(`${baseURL}/members/check-email`, {
    method: 'POST',
    headers: commonHeader,
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    throw new Error('Failed to ')
  }

  return await res.json()
}

export async function fetchSignUp(body: ISignUpPrams) {
  const res = await fetch(`${baseURL}/members/signup`, {
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
