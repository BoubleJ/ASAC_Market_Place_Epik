import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { IOrder } from '@/types/order'

type OrderStore = {
  orders: IOrder | null
  setOrders: (orders: IOrder) => void
}

const DUMMY_ORDERS: IOrder = {
  orderId: 302,
  amount: 98273,
  salesTotalAmount: 3413,
  totalAmount: 94860,
  memberName: '워커02',
  phoneNumber: null,
  address: null,
  orderItemDtos: [
    {
      itemId: 2,
      itemName: '구글 대형 스마트폰 001',
      itemPrice: 34842,
      itemCount: 1,
      discountRate: 2,
    },
    {
      itemId: 3,
      itemName: '구글 고급 스마트폰 002',
      itemPrice: 20700,
      itemCount: 1,
      discountRate: 9,
    },
    {
      itemId: 1,
      itemName: '구글 고급 스마트폰 000',
      itemPrice: 42731,
      itemCount: 1,
      discountRate: 2,
    },
  ],
}

export const useOrderStore = create<OrderStore>()(
  devtools((set, get) => ({
    // orders: DUMMY_ORDERS,
    orders: null,
    setOrders: (orders: IOrder) => {
      set({ orders: orders })
    },
  })),
)
