




export default function FAQFilterBox( { setIsBottomSheetOpen} ) {

  const bottomSheetHandler = () => {
    setIsBottomSheetOpen(true)
  }




  return (
    <div>
      <div className="bg-yellow-400 w-20 h-10" onClick={()=>{
        bottomSheetHandler()
      }}>
        <p>로그인</p>
       
      </div>
   
    </div>
  )
}
