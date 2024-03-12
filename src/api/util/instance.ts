export const baseURL = process.env.NEXT_PUBLIC_BASE_API_PATH
export const baseLocalURL = process.env.NEXT_PUBLIC_BASE_LOCAL_API_PATH
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH

export const commonHeader: Headers = new Headers()
commonHeader.set('Accept', 'application/json')
commonHeader.set('withCredentials', 'include')
commonHeader.set('Content-Type', 'application/json')
