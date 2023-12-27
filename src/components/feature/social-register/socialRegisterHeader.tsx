'use client'
import { useRouter } from 'next/navigation'

import Header from '@/components/common/header'
import { ChevronLeft } from '@/components/icons'
import { Button } from '@/components/ui/button'

export default function SocialRegisterHeader() {
  const router = useRouter()
  return (
    <Header
      left={
        <Button
          size={'icon'}
          onClick={() => router.push('/login')}
          className="bg-transparent text-grayscale-900 hover:bg-transparent border-0 ring-0 shadow-none "
        >
          <ChevronLeft width={'1.5rem'} height={'1.5rem'} className="fill-transparent" />
        </Button>
      }
      center={<span className="text-center">SNS 계정 회원가입</span>}
    />
  )
}
