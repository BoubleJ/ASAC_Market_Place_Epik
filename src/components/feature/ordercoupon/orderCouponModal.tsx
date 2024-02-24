import  { OrderCouponModalOption } from '@/components/feature/ordercoupon/orderCouponModalOption'
import { Button } from '@/components/ui/button'

export default function OrderCouponModal({ isCouponModalOpen, setIsCouponModalOpen }) {
  const closeCouponModalHandler = () => {
    setIsCouponModalOpen(false)
  }

  return (
    <>
      {isCouponModalOpen && (
        <div>
          <div
            className="fixed inset-0 z-10 bg-black opacity-40"
            onClick={() => {
              closeCouponModalHandler()
            }}
          ></div>

          <div className="fixed bottom-0 left-[576px] z-30 h-2/3 w-96 rounded-t-xl border-2 border-solid border-black bg-white">
            <div className="relative h-1/3 w-full">
         
              <OrderCouponModalOption />
              <Button
                variant={'outline'}
                className="ouline-none ring-none h-10 rounded-none border-none hover:bg-transparent"
              >
                취소
              </Button>
              <Button
                variant={'outline'}
                className="ouline-none ring-none h-10 rounded-none border-none hover:bg-transparent"
              >
                확인
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
