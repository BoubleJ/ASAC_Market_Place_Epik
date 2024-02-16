'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

import { ShoppingCart } from '@/components/icons'
import { cn } from '@/lib/utils'
interface ICartLinkIcon {
  className?: string
}
export default function CartLinkIcon({ className }: ICartLinkIcon) {
  const router = useRouter()
  return (
    <ShoppingCart
      width={'1.5rem'}
      height={'1.5rem'}
      className={cn('text-white', className)}
      onClick={() => router.push(`/cart`)}
    />
  )
}
