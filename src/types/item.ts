export interface Product {
  id: number
  name: string
  brand?: string
  discountRate: number
  discountedPrice: number
  itemPrice: number
  promotionUrl: string
  reviewCount?: number
}

export interface ItemDetail {
  data: {
    itemId: number
    itemPrice: number
    saleItemPrice: number
    itemName: string
    discountRate: number
    description: string
    reviewCount: number
    stockQuantity: number
    promotionImageUrl: string
    deliveryMethod: string
    sellerInfo: string
    itemInfo: string
    packagingType: string
    notes: string
    likeCount: number
    detailImages: string[]
    additionalDescription: string
    coupon?: {
      couponId: number
      couponName: string
      discountType: string
      discountValue: string
      validFrom: string
      validTo: string
      minimumOrderPrice: string
    }
    wished: boolean
  }
}
