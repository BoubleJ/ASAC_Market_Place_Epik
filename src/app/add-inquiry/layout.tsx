import AddInquiryHeader from '@/components/feature/addInquiry/AddInquiryHeader'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AddInquiryHeader />
      <div>{children}</div>
    </>
  )
}
