import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

import { AppliedFilterType } from './Filters'

export default function AppliedFilters({ prevAppliedFilters }: { prevAppliedFilters: AppliedFilterType }) {
  const router = useRouter()
  const pathname = usePathname()

  const removeFilterOption = (filterName: keyof AppliedFilterType, option: string) => {
    const updatedOptions = prevAppliedFilters[filterName].filter((item) => item !== option)
    applyURL({ ...prevAppliedFilters, [filterName]: updatedOptions })
  }

  const applyURL = (filters: AppliedFilterType) => {
    const newSearchParams = new URLSearchParams()

    for (const [name, options] of Object.entries(filters)) {
      if (options.length > 0) {
        newSearchParams.append(name, options.join(','))
      }
    }

    const updatedPathname = `${pathname}?${newSearchParams.toString()}`
    router.replace(updatedPathname)
  }

  return (
    <div className="flex px-4 py-1 text-body-sm overflow-x-scroll whitespace-nowrap no-scrollbar">
      {Object.keys(prevAppliedFilters).map((filterName) => {
        const filterOption = prevAppliedFilters[filterName as keyof AppliedFilterType]

        return (
          <div className="flex" key={filterName}>
            {filterOption &&
              filterOption.map((option: string) => (
                <button
                  key={`${filterName}-${option}`}
                  onClick={() => removeFilterOption(filterName as keyof AppliedFilterType, option)}
                  className="pr-4 flex gap-1"
                >
                  <span className="text-brand-primary-500">{option}</span>
                  <span className="text-grayscale-300">x</span>
                </button>
              ))}
          </div>
        )
      })}
    </div>
  )
}
