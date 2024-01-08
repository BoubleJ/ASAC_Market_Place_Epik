import { cookies } from 'next/headers'
import { type NextRequest, NextResponse } from 'next/server'

export default function setProviderInfo(request: NextRequest) {
  try {
    const url = request.nextUrl.clone()
    const providerEmail = url.searchParams.get('providerEmail')
    const provider = url.searchParams.get('provider')
    const providerId = url.searchParams.get('providerId')

    cookies().set('providerEmail', `${providerEmail}`, {
      path: '/',
    })
    cookies().set('provider', `${provider}`, {
      path: '/',
    })
    cookies().set('providerId', `${providerId}`, {
      path: '/',
    })

    url.pathname = url.pathname.startsWith('/login/connect') ? '/login/connect' : '/login/social-register'
    url.searchParams.delete('providerEmail')
    url.searchParams.delete('provider')
    url.searchParams.delete('providerId')

    return NextResponse.redirect(url)
  } catch (error) {
    console.log('error:', error)
    throw new Error("Couldn't set providerInfo")
  }
}
