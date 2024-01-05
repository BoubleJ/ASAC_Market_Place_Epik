import { CartItemDto } from '@/types/product'

export type OrderItem = Pick<
  CartItemDto,
  'itemId' | 'itemName' | 'itemPrice' | 'itemCount' | 'discountRate' | 'promotionImageUrl' | 'salePrice' | 'totalPrice'
>

export type PaymentMethodType = 'KAKAOPAY'

export interface IOrder {
  orderId: number
  amount: number
  salesTotalAmount: number
  totalAmount: number
  memberName: string
  phoneNumber: string
  address: null
  orderItemDtos: OrderItem[]
}

export interface IPaymentParams {
  // memberId: number
  orderId: number
  totalPrice: number
  paymentMethod: PaymentMethodType
}
