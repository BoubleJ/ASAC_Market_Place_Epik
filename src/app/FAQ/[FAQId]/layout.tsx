import FAQHeader from '@/components/feature/faq/FAQHeader'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <FAQHeader />

      <div className="">{children}</div>
    </>
  )
}
