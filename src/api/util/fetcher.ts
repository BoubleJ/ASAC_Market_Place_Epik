export class FetchWrapper {
  private baseUrl: string | URL
  private headers: HeadersInit

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
    this.headers = {}
  }

  setBaseUrl(baseUrl: string | URL): void {
    this.baseUrl = baseUrl
  }

  setHeaders(headers: HeadersInit): void {
    this.headers = headers
  }

  async get<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: 'GET' })
  }

  async post<T>(endpoint: string, data: any, options: RequestInit = {}): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: 'POST', body: JSON.stringify(data) })
  }

  async put<T>(endpoint: string, data: any, options: RequestInit = {}): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: 'PUT', body: JSON.stringify(data) })
  }

  async delete<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: 'DELETE' })
  }

  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = this.baseUrl + endpoint
    const requestOptions: RequestInit = {
      headers: {
        ...this.headers,
        ...options.headers,
        'Content-Type': 'application/json',
      },
      ...options,
    }

    try {
      const response = await fetch(url, requestOptions)

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }

      const responseData: T = await response.json()
      return responseData
    } catch (error) {
      const { status, message } = error as { status: number; message: string }
      console.error('Error:', status, message)
      throw error
    }
  }

  static create(baseUrl: string, defaultHeaders: HeadersInit = {}): FetchWrapper {
    const fetcher = new FetchWrapper(baseUrl)
    fetcher.setHeaders(defaultHeaders)
    return fetcher
  }
}

// Example usage:
// const defaultHeaders: HeadersInit = {
//   Authorization: 'Bearer your_access_token',
// }

// const fetcher = FetchWrapper.create('https://jsonplaceholder.typicode.com', defaultHeaders)

// // Make a GET request
// fetcher
//   .get<{ userId: number }>('/posts/1')
//   .then((data) => {
//     console.log('GET Response:', data)
//   })
//   .catch((error) => {
//     console.error('GET Error:', error)
//   })

// // Make a POST request
// const postData = { title: 'New Post', body: 'This is the body of the new post' }
// fetcher
//   .post<{ id: number }>('/posts', postData)
//   .then((data) => {
//     console.log('POST Response:', data)
//   })
//   .catch((error) => {
//     console.error('POST Error:', error)
//   })

// // Make a PUT request
// const putData = { title: 'Updated Post', body: 'This post has been updated' }
// fetcher
//   .put<{ id: number }>('/posts/1', putData)
//   .then((data) => {
//     console.log('PUT Response:', data)
//   })
//   .catch((error) => {
//     console.error('PUT Error:', error)
//   })

// // Make a DELETE request
// fetcher
//   .delete<{ message: string }>('/posts/1')
//   .then((data) => {
//     console.log('DELETE Response:', data)
//   })
//   .catch((error) => {
//     console.error('DELETE Error:', error)
//   })
