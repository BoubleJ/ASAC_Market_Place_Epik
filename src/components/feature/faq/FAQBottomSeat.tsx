import Link from 'next/link'


// interface FQABottomSeatProps {
//   isBottomSheetOpen: boolean
//   setIsBottomSheetOpen: (value: React.SetStateAction<boolean>) => void
//   list : string[]
// }



export default function FQABottomSeat({ isBottomSheetOpen, setIsBottomSheetOpen,list}) {


  const closeBottomSheetHandler = () => {
    setIsBottomSheetOpen(false)
  }

  const keys = Object.keys(list);

  

  return (
    <>
      {isBottomSheetOpen && (
        <>
          {/* <div
            className="fixed inset-0 bg-black opacity-40 z-30"
            onClick={() => {
              closeBottomSheetHandler()
            }}
          ></div> */}
          <div className="fixed bottom-0 w-96 h-2/3 border-solid border-black border-2 bg-white rounded-t-xl">
            <p>안녕 난 바텀시트야</p>

           
            {keys.map((item, idx) => {
              return (
                <div key={idx}>
                  <Link href={'/FAQ/' + item}>{item}</Link>
                </div>
              )
            })}
             <button
              onClick={() => {
                closeBottomSheetHandler()
              }}
            >
              종료버튼
            </button>
          </div>
        </>
      )}
    </>
  )
}
