import { CartItemDto } from '@/types/product'

export type OrderItem = Pick<CartItemDto, 'itemId' | 'itemName' | 'itemPrice' | 'itemCount' | 'discountRate'>

export type PaymentMethodType = 'KAKAOPAY'

export interface IOrder {
  orderId: number
  amount: number
  salesTotalAmount: number
  totalAmount: number
  memberName: string
  phoneNumber: string | null
  address: null
  orderItemDtos: OrderItem[]
}

export interface IPaymentParams {
  // memberId: number
  orderId: number
  totalPrice: number
  paymentMethod: PaymentMethodType
}

export interface IOrderListItem {
  orderDateTime: Date
  itemName: string
  orderId: number
  totalAmount: number
  deliveryStatus: 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'PAID'
  paymentMethod: null
}

export type IOrderList = IOrderListItem[]

export interface IOrderDetail extends IOrderListItem {
  orderItemDtos: OrderItem[]
}
