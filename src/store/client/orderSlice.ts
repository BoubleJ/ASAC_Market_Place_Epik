import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { IOrder } from '@/types/order'

type OrderStore = {
  orders: IOrder | null
  setOrders: (orders: IOrder) => void
  isEmpty: () => boolean
}

export const useOrderStore = create<OrderStore>()(
  devtools((set, get) => ({
    orders: null,
    setOrders: (orders: IOrder) => {
      set({ orders: orders })
    },
    isEmpty: () => {
      const { orders } = get()
      return orders === null ? true : orders.orderItemDtos.length === 0
    },
  })),
)
