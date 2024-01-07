'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { fetchCheckEmail, fetchSignUp } from '@/api/resource/signup'
import { encodeCheckEmail, encodeSignUpForm } from '@/api/service/signup'
import CheckModal from '@/components/common/modal/checkModal'
import SignupValidationContainer from '@/components/feature/signup/SignupValidationContainer'
import { useModalState } from '@/components/provider/modalProvider'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { editInfoFormSchema } from '@/lib/schema/editInfo'
import { encodeEditInfoForm } from '@/api/service/editinfo'
import { fetchEditInfo } from '@/api/resource/editInfo'
import { currentMemberInfoType } from '@/app/edit-info/page'

const FormSchema = editInfoFormSchema

const ErrorMsg = {
  vaildate: {
    email: '사용 가능한 이메일입니다.',
    phone: '인증번호가 발송되었습니다.',
  },
}
export default function EditInfoForm({ currentMemberInfo }: { currentMemberInfo: currentMemberInfoType }) {
  const router = useRouter()
  const state = useModalState()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      loginId: currentMemberInfo.loginId,
      email: currentMemberInfo.email,
      memberName: currentMemberInfo.memberName,
      phoneNumber: currentMemberInfo.phoneNumber,
    },
    mode: 'onChange',
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data)
    console.log('????')
    const res = await fetchEditInfo(encodeEditInfoForm({ form: data }))
    console.log(res)
    if (res.errorMessage) {
      openCheckModal(res.errorMessage)
      return
    }
    router.push('/myPage')
  }

  const openCheckModal = (content: string) => {
    state.setModal(<CheckModal content={content} />)
    state.modalRef.current?.showModal()
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

  async function onError(error: any) {
    console.log(error)
    console.log('!!!!!!')
  }
  return (
    <section className="py-8 px-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit, onError)} className="w-full space-y-6 ">
          <div className="space-y-3">
            <FormField
              control={form.control}
              name="loginId"
              render={({ field }) => (
                <FormItem className="h-28">
                  <FormLabel>아이디</FormLabel>
                  <SignupValidationContainer>
                    <FormControl>
                      <Input
                        className="h-12"
                        autoComplete="username"
                        placeholder="아이디를 입력해주세요"
                        readOnly
                        {...field}
                      />
                    </FormControl>
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
                  <FormLabel>현재비밀번호</FormLabel>
                  <FormControl>
                    <Input
                      type={'password'}
                      // autoComplete="new-password"
                      className="h-12"
                      placeholder="현재 비밀번호를 입력해주세요"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="newPassword"
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
              name="newPasswordCheck"
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
              name="memberName"
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
                name="phoneNumber"
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
                            !form.getFieldState('phoneNumber').invalid && form.getFieldState('phoneNumber').isDirty
                              ? 'outline'
                              : 'ghost'
                          }
                          disabled={
                            form.getFieldState('phoneNumber').invalid && form.getFieldState('phoneNumber').isDirty
                          }
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
          <div className="space-y-3">
            {/* <Button type="button" variant={'primary'} disabled={} onClick={() => router.push('/')} className="w-full h-12"> */}
            <Button type="submit" variant={'primary'} className="w-full h-12">
              수정하기
            </Button>
          </div>
        </form>
      </Form>
    </section>
  )
}
