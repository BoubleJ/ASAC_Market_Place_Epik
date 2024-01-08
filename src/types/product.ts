export interface ProductType {
  id: number
  name: string
  brand: string
  discountRate: number
  discountedPrice: number
  itemPrice: number
  promotionUrl: string
  reviewCount: number
}

export interface CartItem {
  id: number
  name: string
  brand?: string
  discountRate: number
  discountedPrice: number
  itemPrice: number
  promotionUrl: string
  reviewCount?: number
  count: number
  selected: boolean
}

export interface CartItemDto {
  itemId: number
  itemName: string
  itemPrice: number
  itemCount: number
  totalPrice: number
  salePrice: number
  discountRate: number
  promotionImageUrl: string
}

export interface Cart {
  cartId: number
  amount: number
  salesTotalAmount: number
  totalAmount: number
  cartItemDtos: CartItemDto[]
}
