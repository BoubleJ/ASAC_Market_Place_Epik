'use client'

import React, { useState } from 'react'

import { useOrderListStore } from '@/store/client/orderListSlice'

import OrderHistoryMonthButton from './orderHistoryMonthButton'
interface IOrderHistoryButtonGroup {
  initialData: {
    id: string
    content: string
    month: number
    clicked: boolean
  }[]
}

export default function OrderHistoryButtonGroup({ initialData }: IOrderHistoryButtonGroup) {
  const [buttonContents, setButtonContents] = useState(initialData)
  const { setDuration } = useOrderListStore()
  const handleAccenttButton = (e: React.UIEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const clickedButton = e.currentTarget
    const updatedButtonContents = buttonContents.map((item) => {
      if (item.id === clickedButton.name) {
        setDuration(item.content)
        return { ...item, clicked: true }
      } else {
        return { ...item, clicked: false }
      }
    })
    setButtonContents(updatedButtonContents)
  }

  return (
    <div className="flex gap-[6px] justify-between">
      {buttonContents.map((item) => (
        <OrderHistoryMonthButton key={item.id} buttonContent={item} onClick={handleAccenttButton} />
      ))}
    </div>
  )
}
function orderListSlice(): { setDuration: any } {
  throw new Error('Function not implemented.')
}
