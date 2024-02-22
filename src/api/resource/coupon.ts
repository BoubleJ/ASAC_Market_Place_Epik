
import { basePath, commonHeader } from '@/api/util/instance'

export async function fetchCouponList() {
  console.log('fetchCouponList')
  const res = await fetch(`${basePath}/api/mycoupon`, {
    method: 'GET',
    headers: commonHeader,
  })


  if (!res.ok) {
    throw new Error('Failed')
  }
  const response = await res.json()
  console.log('응답은', response.path)
  return response
}




export async function  fetchDownloadCoupon() {
  const res = await fetch(`${basePath}/api/items/coupon/add`, {
    method: 'POST',
    headers: commonHeader,
  })

  if (res.status !== 200) {
    const errorMsg = await res.json()
    return errorMsg
  }

  const response = await res.json()
  console.log(response)
  return response.msg
}

