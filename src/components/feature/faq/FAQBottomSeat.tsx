import Backdrop from './BackDrop'

type LoginModalProps = {
  ModalHandler: () => void
}

export default function FQABottomSeat({ ModalHandler }: LoginModalProps) {
  return (
    <>
      <Backdrop ModalHandler={ModalHandler}>
        <div className="  text-red-600">뭔가 뜨긴 뜬다 그치?</div>
      </Backdrop>
    </>
  )
}
