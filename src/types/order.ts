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

export const ShippingStatus = {
  PENDING: '배송준비',
  PROCESSING: '배송중',
  COMPLETED: '배송완료',
  PAID: '결제완료',
} as const

export type DeliveryStatus = 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'PAID'

export interface IOrderListItem {
  orderDateTime: string
  itemName: string
  orderId: number
  totalAmount: number
  deliveryStatus: DeliveryStatus
  paymentMethod: string | null
}

export type IOrderList = IOrderListItem[]

export interface IOrderDetail extends IOrderListItem {
  orderItemDtos: OrderItem[]
}
