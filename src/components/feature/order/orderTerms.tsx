export default function OrderTerms() {
  return (
    <div className="flex flex-col gap-[22px] pt-[22px] pb-[30px]">
      <div className="border-b-2 border-gray-50 pb-[22px]">
        <OrderTermItem content={'개인정보 수집, 이용 및 처리 동의'} url={''} />
        <OrderTermItem content={'전자지급 결제대행 서비스 이용약관 동의'} url={''} />
      </div>
      <div>
        <span className="text-body-md">위 내용을 확인 하였으며 결제에 동의합니다.</span>
      </div>
    </div>
  )
}

interface IOrderTermItem {
  content: string
  url: string
}

function OrderTermItem({ content, url }: IOrderTermItem) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-body-base text-grayscale-400">{content}</span>
      <button className="text-body-base font-semibold text-grayscale-500 underline">보기</button>
    </div>
  )
}
