import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { fetchGetCartItem } from '@/api/resource/cart'
import { IOrder } from '@/types/order'

type OrderStore = {
  orders: IOrder | null
  getOrders: () => void
}

export const useOrderStore = create<OrderStore>()(
  devtools((set, get) => ({
    orders: null,
    getOrders: async () => {
      const res: IOrder = await fetchGetCartItem()
      set({ orders: res })
    },
  })),
)
