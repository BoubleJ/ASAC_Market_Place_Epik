import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function convertNumberFormat(number: number) {
  return new Intl.NumberFormat('ko-KR').format(number)
}

export function convertStringToDateFormat(string: string) {
  console.log(string)
  let options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  }
  return Intl.DateTimeFormat('ko-KR', options).format(new Date(string))
}

const DUMMY_URL_LIST = ['http://myshop.com', 'http://example.com', 'http://sales.com']

export function checkDummyImageUrl(url: string) {
  return DUMMY_URL_LIST.some((path) => url.startsWith(path))
}
