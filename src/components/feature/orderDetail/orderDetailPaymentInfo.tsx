import { convertNumberFormat } from '@/lib/utils'

interface IOrderDetailPaymentInfo {
  totalAmount: number
  paymentMethod: string | null
}

export default function OrderDetailPaymentInfo({ totalAmount, paymentMethod }: IOrderDetailPaymentInfo) {
  return (
    <>
      <div className="text-body-md font-bold flex flex-col gap-4 justify-center items-start py-3">
        <h2>결제정보</h2>
        <div className="bg-grayscale-400 w-full h-[1px]" />
        <section className="flex flex-col gap-[18px]">
          <div className="flex gap-[23px]">
            <div className="space-y-3 text-grayscale-600 font-medium text-body-base">
              <span className="block line-clamp-1">결제금액</span>
              <span className="block line-clamp-1">결제방법</span>
            </div>
            <div className="space-y-3 text-grayscale-800 font-medium text-body-base">
              <div className="flex gap-2 font-bold">
                <span className="block line-clamp-1">{convertNumberFormat(totalAmount)}</span>
                <span>원</span>
              </div>
              <span className="block line-clamp-1">{paymentMethod}</span>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
