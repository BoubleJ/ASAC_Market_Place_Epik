'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { fetchSocialRegister } from '@/api/resource/login'
import { fetchCheckEmail, fetchCheckLoginId } from '@/api/resource/signup'
import { encodeSocialRegisterForm } from '@/api/service/login'
import { encodeCheckEmail, encodeCheckUserId } from '@/api/service/signup'
import CheckModal from '@/components/common/modal/checkModal'
import SignupAgreement from '@/components/feature/signup/signupAgreement'
import SignupValidationContainer from '@/components/feature/signup/SignupValidationContainer'
import { useModalState } from '@/components/provider/modalProvider'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { signUpFormSchema } from '@/lib/schema/signup'

const FormSchema = signUpFormSchema

const ErrorMsg = {
  vaildate: {
    userid: '사용 가능한 아이디입니다.',
    email: '사용 가능한 이메일입니다.',
    phone: '인증번호가 발송되었습니다.',
  },
}
export default function SocialRegisterForm() {
  const router = useRouter()
  const state = useModalState()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      agreement: {
        allAgree: false,
        termsOfUse: false,
        termsOfPersonalInfo: false,
        termsOfMarketing: false,
        termsOfAge: false,
      },
    },
    mode: 'onChange',
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data)
    const res = await fetchSocialRegister(encodeSocialRegisterForm({ form: data }))
    console.log(res)
    if (res.errorMessage) {
      openCheckModal(res.errorMessage)
      return
    }
    router.push('/recommendations')
  }

  const openCheckModal = (content: string) => {
    state.setModal(<CheckModal content={content} />)
    state.modalRef.current?.showModal()
  }

  async function handleValidateUserId(userId: string) {
    console.log(userId)
    const isValidId = await fetchCheckLoginId(encodeCheckUserId(userId))
    if (isValidId) {
      openCheckModal(ErrorMsg.vaildate.userid)
      form.clearErrors('userId')
    } else {
      form.setError('userId', { message: '중복된 아이디입니다' }, { shouldFocus: false })
    }
  }

  async function handleValidateEmail(email: string) {
    console.log(email)
    const isValidEmail = await fetchCheckEmail(encodeCheckEmail(email))
    isValidEmail && openCheckModal(email)

    if (isValidEmail) {
      openCheckModal(ErrorMsg.vaildate.email)
      form.clearErrors('email')
    } else {
      form.setError('email', { message: '중복된 이메일입니다' }, { shouldFocus: false })
    }
  }
  async function handleValidatePhone(phone: string) {
    console.log(phone)
    openCheckModal(ErrorMsg.vaildate.phone)
  }

  return (
    <section className="py-8 px-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 ">
          <div className="space-y-3">
            <FormField
              control={form.control}
              name="userId"
              render={({ field }) => (
                <FormItem className="h-28">
                  <FormLabel>아이디</FormLabel>
                  <SignupValidationContainer>
                    <FormControl>
                      <Input className="h-12" autoComplete="username" placeholder="아이디를 입력해주세요" {...field} />
                    </FormControl>
                    <Button
                      type="button"
                      variant={
                        !form.getFieldState('userId').invalid && form.getFieldState('userId').isDirty
                          ? 'outline'
                          : 'ghost'
                      }
                      disabled={form.getFieldState('userId').invalid && form.getFieldState('userId').isDirty}
                      className="h-12"
                      onClick={() => handleValidateUserId(field.value)}
                    >
                      중복확인
                    </Button>
                  </SignupValidationContainer>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="h-28">
                  <FormLabel>비밀번호</FormLabel>
                  <FormControl>
                    <Input
                      type={'password'}
                      autoComplete="new-password"
                      className="h-12"
                      placeholder="비밀번호를 입력해주세요"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="passwordConfirm"
              render={({ field }) => (
                <FormItem className="h-28">
                  <FormLabel>비밀번호 확인</FormLabel>
                  <FormControl>
                    <Input
                      type={'password'}
                      autoComplete="new-password"
                      className="h-12"
                      placeholder="비밀번호를 한번 더 입력해주세요"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="userName"
              render={({ field }) => (
                <FormItem className="h-28">
                  <FormLabel>이름</FormLabel>
                  <FormControl>
                    <Input className="h-12" placeholder="이름을 입력해주세요" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="h-28">
                  <FormLabel>이메일</FormLabel>
                  <SignupValidationContainer>
                    <FormControl>
                      <Input type={'email'} className="h-12" placeholder="예: marketplace@gmail.com" {...field} />
                    </FormControl>
                    <Button
                      type="button"
                      variant={
                        !form.getFieldState('email').invalid && form.getFieldState('email').isDirty
                          ? 'outline'
                          : 'ghost'
                      }
                      disabled={form.getFieldState('email').invalid && form.getFieldState('email').isDirty}
                      className="h-12"
                      onClick={() => handleValidateEmail(field.value)}
                    >
                      중복확인
                    </Button>
                  </SignupValidationContainer>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <>
                    <FormItem className="h-28">
                      <FormLabel>휴대폰</FormLabel>
                      <SignupValidationContainer>
                        <FormControl>
                          <Input className="h-12" placeholder="숫자만 입력해주세요" {...field} />
                        </FormControl>
                        <Button
                          type="button"
                          variant={
                            !form.getFieldState('phone').invalid && form.getFieldState('phone').isDirty
                              ? 'outline'
                              : 'ghost'
                          }
                          disabled={form.getFieldState('phone').invalid && form.getFieldState('phone').isDirty}
                          className="h-12"
                          onClick={() => handleValidatePhone(field.value)}
                        >
                          인증번호 받기
                        </Button>
                      </SignupValidationContainer>
                      <FormMessage />
                    </FormItem>
                  </>
                )}
              />
            </div>
          </div>
          <SignupAgreement form={form} />
          {/* signup agreement */}
          <div className="space-y-3">
            <Button type="submit" variant={'primary'} className="w-full h-12">
              가입하기
            </Button>
          </div>
        </form>
      </Form>
    </section>
  )
}
