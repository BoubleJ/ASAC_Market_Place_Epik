import { basePath, commonHeader } from '@/api/util/instance'
import { EditInfoParams } from '@/types/editinfo'

export async function fetchEditInfo(body: EditInfoParams) {
  const res = await fetch(`${basePath}/api/members/editinfo`, {
    method: 'POST',
    headers: commonHeader,
    body: JSON.stringify(body),
  })
  const msg = await res.json()

  return await msg
}
