import Coupon from '@/components/feature/coupon/Coupon'

export const dynamic = 'force-dynamic'

export default function page() {
  return (
    <div className="h-full w-full p-4">
      <div className=" text-title-sm">
        <Coupon />
      </div>
    </div>
  )
}
