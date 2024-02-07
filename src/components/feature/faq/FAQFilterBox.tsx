import SvgTriangleDown from '@/components/icons/triangle-down'

export default function FAQFilterBox({ setIsBottomSheetOpen, list, slug }) {
  const bottomSheetHandler = () => {
    setIsBottomSheetOpen(true)
  }

  const result = list.find((item) => item.title == slug)
  return (
    <>
      <div
        className=" w-full h-12 border-2 border-solid rounded-md border-grayscale-100  mb-5"
        onClick={() => {
          bottomSheetHandler()
        }}
      >
        <p className=" text-body-base pl-5 py-3">
          {result.filterTitle}
          <div className="float-right pt-0.5 pb-3 pr-2.5">
            <SvgTriangleDown />
          </div>
        </p>
      </div>
    </>
  )
}
