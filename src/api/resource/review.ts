import { basePath, baseURL, commonHeader } from '../util/instance'

export async function fetchReviews(itemId: number) {
  const body = { itemId: itemId }
  const res = await fetch(`${basePath}/api/review`, {
    method: 'POST',
    headers: commonHeader,
    body: JSON.stringify(body),
  })
  if (!res.ok) {
    throw new Error(`failed to fetch review data${baseURL}/items/reviews?itemId=${itemId}`)
  }
  return res.json()
}

export async function getPresignedURL(fileName: string) {
  const dotIndex = fileName.lastIndexOf('.')
  const name = fileName.substring(0, dotIndex)
  const contentType = fileName.substring(dotIndex + 1)

  const res = await fetch(`${baseURL}/reviews/generate-presigned-url?fileName=${fileName}&contentType=${contentType}`)
  if (!res.ok) {
    throw new Error(`failed to get presigned URL`)
  }
  return res.json()
}

export async function uploadImage(imageFormData: FormData) {
  const res = await fetch(`${baseURL}/reviews/upload-file`, {
    method: 'PUT',
    headers: commonHeader,
    body: imageFormData,
  })
  if (!res.ok) {
    throw new Error(`failed to upload image to s3`)
  }
  return res.json()
}
