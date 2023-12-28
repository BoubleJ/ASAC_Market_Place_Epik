import { cartItemDto } from '@/types/product'

export type OrderItem = Pick<cartItemDto, 'itemId' | 'itemName' | 'itemPrice' | 'itemCount' | 'discountRate'>

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
