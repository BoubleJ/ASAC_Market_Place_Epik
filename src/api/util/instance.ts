export const baseURL = process.env.NEXT_PUBLIC_BASE_API_PATH

export const commonHeader: Headers = new Headers()
commonHeader.append('Accept', 'application/json')
commonHeader.append('withCredentials', 'include')
commonHeader.append('Content-Type', 'application/json;charset=utf-8')

// export const baseAPI = FetchWrapper.create(`${baseURL}`, commonHeader)
