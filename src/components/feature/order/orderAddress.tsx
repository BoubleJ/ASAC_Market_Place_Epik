import { Button } from '@/components/ui/button'

export default function OrderAddress() {
  return (
    <div className="py-4">
      <div className="mb-[15px]">
        <span className="text-body-base">배송지</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-body-base line-clamp-2">서울특별시 마포구 공덕동 252-5 5층 구석</span>
        <Button variant={'ghost'} size={'default'} className="text-grayscale-700">
          변경
        </Button>
      </div>
    </div>
  )
}
