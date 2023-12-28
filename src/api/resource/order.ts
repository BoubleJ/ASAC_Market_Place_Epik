import { commonHeader } from '@/api/util/instance'
import { baseURL } from '@/api/util/instance'

// http://localhost:8080/api/orders
export async function fetchLogin() {
  const res = await fetch(`${baseURL}/orders`, {
    headers: commonHeader,
  })

  if (res.status !== 200) {
    const errorMsg = await res.text()
    return { errorMessage: errorMsg }
  }

  return await res.json()
}
