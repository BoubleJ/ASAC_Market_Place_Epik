import { commonHeader } from '@/api/util/instance'
import { baseURL } from '@/api/util/instance'
import { ILoginParams } from '@/types/login'

export async function fetchLogin(body: ILoginParams) {
  const res = await fetch(`${baseURL}/members/authenticate`, {
    method: 'POST',
    headers: {
      ...commonHeader,
    },
    body: JSON.stringify(body),
  })

  if (res.status !== 200) {
    const errorMsg = await res.text()
    return { errorMessage: errorMsg }
  }

  return await res.json()
}
