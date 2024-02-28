import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function convertNumberFormat(number: number) {
  return new Intl.NumberFormat('ko-KR').format(number)
}

export function convertStringToDateFormat(date: string) {
  const serverDate = new Date(date)
  const KST = new Date()
  const UTC_NINE = serverDate.getTime() + 9 * 60 * 60 * 1000
  KST.setTime(UTC_NINE)

  let options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
    timeZone: 'Asia/Seoul',
  }
  return Intl.DateTimeFormat('ko-KR', options).format(new Date(KST))
}

export function convertStringToDateFormaUTC(date: string) {
  let options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
    timeZone: 'Asia/Seoul',
  }
  return Intl.DateTimeFormat('ko-KR', options).format(new Date(date))
}

const DUMMY_URL_LIST = ['http://myshop.com', 'http://example.com', 'http://sales.com']

export function checkDummyImageUrl(url: string) {
  return DUMMY_URL_LIST.some((path) => url.startsWith(path))
}

export const curry = (fn: (...args: any[]) => any) => {
  return function curried(...args: any[]): any {
    if (fn.length !== args.length) {
      return curried.bind(null, ...args)
    }
    return fn(...args)
  }
}
// const total = (x: number, y: number, z: number) => x + y + z
// const curriedTotal = curry(total)
// console.log(curriedTotal(10)(20)(30))
