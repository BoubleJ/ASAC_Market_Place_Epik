import InquiryHeader from '@/components/feature/inquiry/InquiryHeader'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <InquiryHeader />

      <div className="">{children}</div>
    </>
  )
}
