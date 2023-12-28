'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { fetchVerifyAndUpdateSocialLogin } from '@/api/resource/login'
import { encodeVerifyAndUpdateSocialLoginForm } from '@/api/service/login'
import CheckModal from '@/components/common/modal/checkModal'
import { useModalState } from '@/components/provider/modalProvider'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { ConnectFormSchema } from '@/lib/schema/connect'

const FormSchema = ConnectFormSchema

export default function ConnectForm() {
  const router = useRouter()
  const state = useModalState()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      password: '',
    },
  })

  const openCheckModal = (content: string) => {
    state.setModal(<CheckModal content={content} />)
    state.modalRef.current?.showModal()
  }

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data)
    const res = await fetchVerifyAndUpdateSocialLogin(encodeVerifyAndUpdateSocialLoginForm(data))
    if (res.errorMessage) {
      openCheckModal(res.errorMessage)
    } else {
      openCheckModal(res)
      router.push('/recommandations')
    }
  }

  return (
    <section className="py-8 px-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 ">
          <div className="space-y-3">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={'text-body-base'}>이메일</FormLabel>
                  <FormControl>
                    <Input type={'email'} className="h-12" placeholder="예: marketplace@gmail.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={'text-body-base'}>비밀번호</FormLabel>
                  <FormControl>
                    <Input type={'password'} className="h-12" placeholder="비밀번호를 입력해주세요" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="space-y-3">
            <Button type="submit" variant={'primary'} className="w-full h-12">
              카카오 계정 연결하기
            </Button>
          </div>
        </form>
      </Form>
    </section>
  )
}
