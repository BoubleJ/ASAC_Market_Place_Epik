function layout({ children }: { children: React.ReactNode }) {
  return <main className="max-w-[1024px] flex flex-col bg-white items-center mx-auto h-[100dvh]">{children}</main>
}

export default layout
