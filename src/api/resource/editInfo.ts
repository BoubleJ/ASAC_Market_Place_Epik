import { EditInfoParams } from '@/types/editinfo'
import { baseURL, commonHeader } from '@/api/util/instance'

export async function fetchEditInfo(body: EditInfoParams) {
  const res = await fetch(`/api/members/editinfo`, {
    method: 'POST',
    headers: commonHeader,
    body: JSON.stringify(body),
  })

  if (res.status === 404) {
    const msg = await res.json()
    return { errorMessage: msg.msg }
  }

  return await res.json()
}
