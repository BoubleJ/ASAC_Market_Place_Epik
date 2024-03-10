import { useRef } from 'react'

// useDebounce 훅
const useDebounce = <T extends (...args: any[]) => any>(fn: T, delay: number) => {
  let debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  return (...args: Parameters<T>): ReturnType<T> => {
    let result: any
    if (debounceTimer.current) clearTimeout(debounceTimer.current)
    debounceTimer.current = setTimeout(() => {
      result = fn(...args)
    }, delay)
    return result
  }
}

export default useDebounce
