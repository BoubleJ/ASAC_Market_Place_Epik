import { Span } from 'next/dist/trace'

export default function FAQFilterBox({ setIsBottomSheetOpen, slug }) {
  const bottomSheetHandler = () => {
    setIsBottomSheetOpen(true)
  }

  return (
    <>
      <div
        className=" w-full h-12 border-2 border-solid rounded-md border-grayscale-100"
        onClick={() => {
          bottomSheetHandler()
        }}
      >
        <p className=" text-body-base pl-5 py-3">{slug}</p>
      </div>
    </>
  )
}
