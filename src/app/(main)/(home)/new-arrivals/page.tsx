import { Suspense } from 'react'

import NewArrivalsList from '@/components/feature/newArrivals/NewArrivalsList'

export const runtime = 'edge'

export default async function NewArrivalsPage() {
  return (
    <Suspense fallback={<div className="h-4 w-full bg-slate-200">Loading feed...</div>}>
      <NewArrivalsList />
    </Suspense>
  )
}
