'use client'

import { fetchOrderList } from '@/api/resource/order'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useOrderListStore } from '@/store/client/orderListSlice'
import { IOrderList } from '@/types/order'

interface IOrderHistoryMonthButton {
  buttonContent: { id: string; content: string; month: number; clicked: boolean }
  onClick: (e: React.UIEvent<HTMLButtonElement>) => void
}

export default function OrderHistoryMonthButton({ buttonContent, onClick }: IOrderHistoryMonthButton) {
  const { setOrderList } = useOrderListStore()
  const handleClick = async (e: React.UIEvent<HTMLButtonElement>) => {
    onClick(e)
    const res: IOrderList = await fetchOrderList(buttonContent.month)
    setOrderList(res)
    console.log(res)
  }

  return (
    <Button
      variant={buttonContent.clicked ? 'outline' : 'ghost'}
      size={'lg'}
      name={buttonContent.id}
      className={cn('text-body-base text-grayscale-800', { 'text-brand-primary-500': buttonContent.clicked })}
      onClick={handleClick}
    >
      {buttonContent.content}
    </Button>
  )
}
