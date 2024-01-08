function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="max-w-[1024px] flex flex-col bg-white items-center text-grayscale-700 mx-auto h-[100dvh] divide-y-8 divide-grayscale-50">
      {children}
    </main>
  )
}

export default layout
