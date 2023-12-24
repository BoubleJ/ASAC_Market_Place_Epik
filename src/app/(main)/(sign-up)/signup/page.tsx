import SignupForm from '@/components/feature/signup/signupForm'
import SignupHeader from '@/components/feature/signup/signupHeader'

export default function SignUpPage() {
  return (
    <section className="h-[calc(100dvh_-_56px)] overflow-y-auto">
      <SignupHeader />
      <SignupForm />
    </section>
  )
}
