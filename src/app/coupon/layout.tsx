import CouponHeader from '@/components/feature/coupon/CouponHeader'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CouponHeader />
      <div className="">{children}</div>
    </>
  )
}
