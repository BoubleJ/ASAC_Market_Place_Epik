import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

// export async function GET(req: NextRequest) {
//   try {
//     return NextResponse.redirect(`${process.env.NEXT_PUBLIC_AUTH_LOGIN}`)
//   } catch (error) {
//     return NextResponse.redirect('/login')
//   }
// }

export async function POST(req: NextRequest) {
  try {
    const dd = req.cookies.get('Authorization')
    console.log('req cookie', dd)

    const authToken = cookies().get('Authorization')
    console.log('auth cookie', authToken)

    if (authToken) {
      return NextResponse.redirect(`/login/connect`)
    } else {
      return NextResponse.redirect(`/login`)
    }
  } catch (error) {
    return NextResponse.redirect(`/login`)
  }
}

// export async function POST(req: NextRequest) {
//   try {
//     const code = req.nextUrl.searchParams.get('code')
//     const res = await fetch(`${baseURL}/code?=${code}`)
//     const token = await res.json()
//     console.log(token)
//     // access token
//     commonHeader.append('Authorization', `Bearer ${token}`)
//     console.log(commonHeader)
//     cookies().set('accessToken', `${token}`, {
//       httpOnly: true,
//       secure: true,
//     })

//     // refresh token
//     // cookies().set('refresh', `${token}`, {
//     //   httpOnly: true,
//     //   secure: true
//     // })
//   } catch (error) {}
//   // cookies().set('key', 'value')
// }

// http://localhost:3000/api/oauth/callback/kakao
// https://asac-marketplace-six.vercel.app/api/oauth/callback/kakao

// http://localhost:3000/oauth/callback/kakao
// https://asac-marketplace-six.vercel.app/oauth/callback/kakao
