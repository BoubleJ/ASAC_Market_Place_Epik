import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-gray-300',
  {
    variants: {
      variant: {
        primary: 'bg-brand-primary-500 hover:bg-brand-primary-400 text-center text-white',
        outline:
          'border border-brand-primary-500 bg-white hover:bg-brand-primary-100 text-center text-brand-primary-500 ',
        secondary: 'border border-grayscale-100 bg-white hover:bg-gray-50',
        disable: 'bg-grayscale-200 text-center text-white',
        ghost: 'border border-grayscale-100 bg-white text-center text-grayscale-200',
        kakao: 'text-grayscale-900 bg-[#FBD821] text-button-md hover:bg-[#FBD821]/80 hover:text-gray-700',
        gray: 'bg-grayscale-100 text-button-sm font-normal',
        none: 'bg-transparent',
        default:
          'bg-grayscale-black text-gray-50 shadow hover:bg-gray-900/90 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90',
      },
      size: {
        lg: 'w-80 h-[46px] px-[26px] py-2.5 rounded-[5px] justify-center items-center gap-2.5 inline-flex text-base font-medium',
        sm: 'w-[155px] h-[47px] px-[26px] py-2.5 rounded-[5px] justify-center items-center gap-2.5 inline-flex text-sm font-semibold',
        default: 'h-9 px-4 py-2 text-sm font-semibold',
        icon: 'h-9 w-9 text-sm font-medium',
        checkbox: 'h-5 w-5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
