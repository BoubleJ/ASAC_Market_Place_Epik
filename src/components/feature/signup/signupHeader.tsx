'use client'
import { useRouter } from 'next/navigation'

import Header from '@/components/common/header'
import { Bag, IconXMono } from '@/components/icons'
import { Button } from '@/components/ui/button'

export default function SignupHeader() {
  const router = useRouter()
  return (
    <Header
      left={
        <Button
          size={'icon'}
          onClick={() => router.push('/login')}
          className="bg-transparent text-grayscale-900 hover:bg-transparent border-0 ring-0 shadow-none"
        >
          <IconXMono height={'1.5rem'} width={'1.5rem'} />
        </Button>
      }
      center={<span className="text-center">회원가입</span>}
      right={
        <Button
        size={'icon'}
        onClick={() => router.push("/cart")}
          className="bg-transparent text-grayscale-900 hover:bg-transparent border-0 ring-0 shadow-none ml-auto"
        >
          <Bag width={'1.5rem'} height={'1.5rem'} fill="white" />
        </Button>
      }
    />
  )
}
