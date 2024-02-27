'use client'

import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { IOrder } from '@/types/order'

export type OrderState = {
  orders: IOrder
}

export type OrderAction = {
  setOrders: (orders: IOrder) => void
  getOrderName: (orders: IOrder) => string
  isEmpty: () => boolean
}
export type OrderStore = OrderState & OrderAction

export const defaultInitialState: IOrder = {
  orderId: 0,
  amount: 0,
  salesTotalAmount: 0,
  totalAmount: 0,
  memberName: '',
  phoneNumber: '',
  address: null,
  orderItemDtos: [],
}

export const createOrderStore = (initialState: IOrder = defaultInitialState) => {
  return create<OrderStore>()(
    devtools((set, get) => ({
      orders: { ...initialState },
      setOrders: (orders: IOrder) => {
        set({ orders: orders })
      },
      getOrderName: (orders: IOrder) => {
        const { isEmpty } = get()
        return OrdersController(orders).createOrderName(isEmpty())
      },
      isEmpty: () => {
        const { orders } = get()
        return OrdersController(orders).isEmpty()
      },
    })),
  )
}

const OrdersController = (orders: IOrder) => ({
  createOrderName: (isEmpty: boolean) => {
    return isEmpty ? createEmptyOrderName() : createNonEmptyOrderName(orders)
  },
  isEmpty: () => {
    return !orders ? true : orders.orderItemDtos.length === 0
  },
})

const createEmptyOrderName = () => {
  return `선택된 상품이 없습니다`
}

const createNonEmptyOrderName = (orders: IOrder) => {
  const headItemNamePrefix = orders.orderItemDtos[0].itemName.substring(0, 12)
  const orderProductCount = orders.orderItemDtos.length
  return `${headItemNamePrefix}...외${orderProductCount}건`
}
