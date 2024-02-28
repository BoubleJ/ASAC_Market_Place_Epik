export interface Coupon {
  couponName: string
  discountValue: number
  id: number
  discountType: string
  validFrom: string
  validTo: string
  minimumOrderPrice: number | null
  used: boolean
}
