import FAQHeader from '@/components/feature/faq/FAQHeader'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <FAQHeader />

      <div className="pt-20 ">{children}</div>
      <div className="fixed bottom-0 w-96 h-2/3 border-solid border-black border-2 bg-white rounded-t-xl" id="portal" />
    </>
  )
}
