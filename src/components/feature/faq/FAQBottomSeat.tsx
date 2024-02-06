import Link from 'next/link'

// interface FQABottomSeatProps {
//   isBottomSheetOpen: boolean
//   setIsBottomSheetOpen: (value: React.SetStateAction<boolean>) => void
//   list : string[]
// }

export default function FQABottomSeat({ isBottomSheetOpen, setIsBottomSheetOpen, list }) {
  const closeBottomSheetHandler = () => {
    setIsBottomSheetOpen(false)
  }

  return (
    <>
      {isBottomSheetOpen && (
        <>
          <div
            className="fixed inset-0 bg-black opacity-40 z-10"
            onClick={() => {
              closeBottomSheetHandler()
            }}
          ></div>
          <div className="fixed bottom-0 w-80 h-2/3 border-solid border-black border-2 bg-white rounded-t-xl z-30">
            <p className="pl-5 text-title-lg pt-11">문의 유형 선택</p>

            {list.map((item, idx) => {
              return (
                <div className="w-full h-14 hover:bg-grayscale-50" key={idx}>
                  <Link href={'/FAQ/' + item.title}>
                    <p className="pl-5 py-4 text-body-md ">{item.title}</p>
                  </Link>
                </div>
              )
            })}
          </div>
        </>
      )}
    </>
  )
}
