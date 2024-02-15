import React from 'react'

import { cn } from '@/lib/utils'

interface IOrderItemContainer {
  className?: string
  children: React.ReactNode
}

export default function OrderContainer({ className, children }: IOrderItemContainer) {
  return <section className={cn('px-5 py-4', className)}>{children}</section>
}
