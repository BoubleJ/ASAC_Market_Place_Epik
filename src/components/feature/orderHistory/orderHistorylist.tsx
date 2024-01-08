'use client'

import { useEffect } from 'react'

import { useOrderListStore } from '@/store/client/orderListSlice'
import { IOrderList, IOrderListItem } from '@/types/order'

import OrderHistoryEmpty from './orderHistoryEmpty'
import OrderHistoryItem from './orderHistoryItem'

interface IOrderHistorylist {
  initialOrderList: IOrderList
}

export default function OrderHistorylist({ initialOrderList }: IOrderHistorylist) {
  const { orderList, setOrderList } = useOrderListStore()
  const isEmpty = () => {
    if (!orderList) return true
    return orderList.length === 0
  }

  useEffect(() => {
    setOrderList(initialOrderList)
  }, [setOrderList, initialOrderList])
  console.log(isEmpty())
  if (isEmpty()) return <OrderHistoryEmpty />

  return (
    <div className="pt-[12px] divide-y-[10px] divide-grayscale-50">
      {!isEmpty() && orderList?.map((item: IOrderListItem) => <OrderHistoryItem key={item.orderId} content={item} />)}
    </div>
  )
}
