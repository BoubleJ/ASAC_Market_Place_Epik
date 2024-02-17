import './globals.css'

import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Script from 'next/script'
import React from 'react'

import Provider from '@/components/provider/provider'

const pretendard = localFont({
  src: './PretendardVariable.woff2',
  display: 'swap',
  variable: '--font-pretendard',
})

export const metadata: Metadata = {
  title: 'Market place',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko-KR" className={pretendard.className}>
      <body className={`${pretendard.className} bg-fixed flex items-center justify-center h-full`}>
        <div className="fixed bg-white overflow-auto overflow-x-hidden w-96 h-full no-scrollbar">
          <Provider>{children}</Provider>
        </div>
        <Script src="https://cdn.iamport.kr/v1/iamport.js" />
        <Script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js" />
      </body>
    </html>
  )
}
