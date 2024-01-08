import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { IOrderList } from '@/types/order'

type OrderListStore = {
  orderList: IOrderList | null
  duration: string
  setOrderList: (orderList: IOrderList) => void
  setDuration: (duration: string) => void
}

// const DUMMY_ORDERS: IOrderList = {}

export const useOrderListStore = create<OrderListStore>()(
  devtools((set, get) => ({
    // orders: DUMMY_ORDERS,
    orderList: null,
    duration: '',
    setOrderList: (orderList: IOrderList) => {
      set({ orderList: orderList })
    },
    setDuration: (duration: string) => {
      set({ duration: duration })
    },
  })),
)
