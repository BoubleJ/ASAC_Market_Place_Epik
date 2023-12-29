import { cartItemDto } from '@/types/product'

export type OrderItem = Pick<cartItemDto, 'itemId' | 'itemName' | 'itemPrice' | 'itemCount' | 'discountRate'>

export type PaymentMethodType = 'KAKAOPAY'

export interface IOrder {
  data: {
    orderId: number
    amount: number
    salesTotalAmount: number
    totalAmount: number
    memberName: string
    phoneNumber: string
    address: null
    orderItemDtos: OrderItem[]
  }
}

export interface IPaymentParams {
  memberId: number
  orderId: number
  totalPrice: number
  paymentMethod: PaymentMethodType
}
