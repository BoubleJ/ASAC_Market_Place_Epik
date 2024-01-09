interface IMyMenuContainer {
  children: React.ReactNode
}

export default function MyMenuContainer({ children }: IMyMenuContainer) {
  return <div className="flex flex-col w-full">{children}</div>
}
