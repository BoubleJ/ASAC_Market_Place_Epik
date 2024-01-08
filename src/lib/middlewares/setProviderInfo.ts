import { type NextRequest, NextResponse } from 'next/server'

export default async function setProviderInfo(request: NextRequest) {
  try {
    const url = request.nextUrl.clone()

    const providerEmail = url.searchParams.get('providerEmail')
    const provider = url.searchParams.get('provider')
    const providerId = url.searchParams.get('providerId')

    url.searchParams.delete('providerEmail')
    url.searchParams.delete('provider')
    url.searchParams.delete('providerId')

    const response = NextResponse.redirect(url, { status: 302 })

    response.cookies.set({
      name: 'providerEmail',
      value: providerEmail!,
      path: '/',
    })

    response.cookies.set({
      name: 'provider',
      value: provider!,
      path: '/',
    })

    response.cookies.set({
      name: 'providerId',
      value: providerId!,
      path: '/',
    })

    return response
  } catch (error) {
    console.log('Couldnt set providerInfo in setProviderInfo.ts :', error)
    return NextResponse.redirect('http://localhost:3000/login')
  }
}
