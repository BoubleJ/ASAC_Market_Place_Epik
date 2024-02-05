type BackDropType = {
  children: React.ReactNode
  ModalHandler: () => void
}

export default function Backdrop({ children, ModalHandler }: BackDropType) {
  return (
    <div className="" onClick={ModalHandler}>
      {children}
    </div>
  )
}
