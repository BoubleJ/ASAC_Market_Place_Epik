'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { fetchLogin } from '@/api/resource/login'
import { encodeLoginForm } from '@/api/service/login'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { LoginFormSchema } from '@/lib/schema/login'

const FormSchema = LoginFormSchema

export default function LoginForm() {
  const router = useRouter()
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      loginId: '',
      password: '',
    },
  })
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data)
    const dd = await fetchLogin(encodeLoginForm(data))
    console.log(dd)
  }
  return (
    <section className="py-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 ">
          <div className="space-y-3">
            <FormField
              control={form.control}
              name="loginId"
              render={({ field }) => (
                <FormItem className="">
                  <FormControl>
                    <Input className="h-12" placeholder="아이디를 입력해주세요" {...field} />
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
              로그인
            </Button>
            <Button type="button" variant={'outline'} onClick={() => router.push('/signup')} className="w-full h-12">
              회원가입
            </Button>
          </div>
        </form>
      </Form>
      <div className="flex text-body-xs font-normal text-grayscale-600 gap-2 justify-center pt-7">
        <Link href={'/'} className="hover:text-brand-primary-500">
          아이디찾기
        </Link>
        |
        <Link href={'/'} className="hover:text-brand-primary-500">
          비밀번호 찾기
        </Link>
      </div>
    </section>
  )
}
