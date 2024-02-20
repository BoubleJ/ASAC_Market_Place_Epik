'use client'

import { useRef } from 'react'

import { useOrderStore } from '@/store/client/orderSlice'
import { IOrder } from '@/types/order'

interface IOrderStoreInitializer {
  orders: IOrder
  orderName: string
}

export default function OrderStoreInitializer({ orders, orderName }: IOrderStoreInitializer) {
  const initializer = useRef(false)
  if (!initializer.current) {
    useOrderStore.setState({ orders, orderName })
    initializer.current = true
  }
  return null
}
