import { LRUCache } from 'lru-cache'
import type { NextRequest } from 'next/server'

type Options = {
  uniqueTokenPerInterval?: number
  interval?: number
}

export const rateLimit = (options?: Options) => {
  const tokenCache = new LRUCache({
    max: options?.uniqueTokenPerInterval || 500, // Max 500 users per interval
    ttl: options?.interval || 1000 * 60 * 5,
  })

  return {
    check: (req: NextRequest, limit: number, token: string) =>
      new Promise<void>((resolve, reject) => {
        const tokenCount = (tokenCache.get(token) as number[]) || [0]
        if (tokenCount[0] === 0) {
          tokenCache.set(token, tokenCount)
        }
        tokenCount[0] += 1

        const currentUsage = tokenCount[0]
        const isRateLimited = currentUsage >= limit

        req.headers.set('X-RateLimit-Limit', limit.toString())
        req.headers.set('X-RateLimit-Remaining', (isRateLimited ? 0 : limit - currentUsage).toString())

        return isRateLimited ? reject() : resolve()
      }),
  }
}
