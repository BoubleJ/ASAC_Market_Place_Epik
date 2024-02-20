import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { IOrder } from '@/types/order'

type OrderStore = {
  orders: IOrder | null
  orderName: string | null
  setOrders: (orders: IOrder) => void
  setOrderName: (orderName: string) => void
  isEmpty: () => boolean
}

export const useOrderStore = create<OrderStore>()(
  devtools((set, get) => ({
    orders: null,
    orderName: null,
    setOrders: (orders: IOrder) => {
      set({ orders: orders })
    },
    setOrderName: (orderName: string) => {
      set({ orderName: orderName })
    },
    isEmpty: () => {
      const { orders } = get()
      return !orders ? true : orders.orderItemDtos.length === 0
    },
  })),
)
