
import { basePath, commonHeader } from '@/api/util/instance'

export async function fetchCouponList() {
  console.log('fetchCouponList')
  const res = await fetch(`${basePath}/api/mycoupon`, {
    method: 'GET',
    headers: commonHeader,
  })


  if (!res.ok) {
    throw new Error('Failed!!!!!!!')
  }
  const response = await res.json()
  console.log('응답은', response)
  return response
}
