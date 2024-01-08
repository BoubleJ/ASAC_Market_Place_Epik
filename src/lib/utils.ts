import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function convertNumberFormat(number: number) {
  return new Intl.NumberFormat('ko-KR').format(number)
}

export function convertStringToDateFormat(string: string) {
  let options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  }
  return new Intl.DateTimeFormat('ko-KR', options).format(new Date(string))
}
