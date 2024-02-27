'use client'

import { createContext, type ReactNode, useContext, useRef } from 'react'
import { type StoreApi, useStore } from 'zustand'

import { initializePaymentModule } from '@/lib/payment/portOnePayment'
import { createOrderStore, type OrderStore } from '@/store/client/orderSlice'
import { IOrder } from '@/types/order'

export const OrderStoreContext = createContext<StoreApi<OrderStore> | null>(null)

export interface OrderStoreProviderProps {
  orders: IOrder
  children: ReactNode
}

export function OrderStoreProvider({ orders, children }: OrderStoreProviderProps) {
  const storeRef = useRef<StoreApi<OrderStore>>()
  if (!storeRef.current) {
    storeRef.current = createOrderStore(orders)
    if (typeof window !== 'undefined') initializePaymentModule()
  }

  return <OrderStoreContext.Provider value={storeRef.current}>{children}</OrderStoreContext.Provider>
}

export const useOrderStore = <T,>(selector: (store: OrderStore) => T): T => {
  const orderStoreContext = useContext(OrderStoreContext)

  if (!orderStoreContext) {
    throw new Error(`useOrderStore must be use within OrderStoreProvider`)
  }

  return useStore(orderStoreContext, selector)
}
