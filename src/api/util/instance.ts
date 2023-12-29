export const baseURL = process.env.NEXT_PUBLIC_BASE_API_PATH
export const baseLocalURL = process.env.NEXT_PUBLIC_BASE_LOCAL_API_PATH
// export const baseURL = 'http://localhost:3000/api'

export const commonHeader: Headers = new Headers()
commonHeader.set('Accept', 'application/json')
commonHeader.set('withCredentials', 'include')
commonHeader.set('Content-Type', 'application/json;charset=utf-8')
// commonHeader.append('Accept', 'application/json')
// commonHeader.append('withCredentials', 'include')
// commonHeader.append('Content-Type', 'application/json;charset=utf-8')

// export const baseAPI = FetchWrapper.create(`${baseURL}`, commonHeader)
