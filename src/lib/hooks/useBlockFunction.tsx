import { useState } from 'react'

type BlockAsyncFn = () => Promise<void>

export default function useBlockAsync() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const blockedAsyncFn = (fn: BlockAsyncFn) => async () => {
    setIsLoading(true)
    try {
      fn()
    } finally {
      setIsLoading(false)
    }
  }
  return { isLoading, blockedAsyncFn }
}
