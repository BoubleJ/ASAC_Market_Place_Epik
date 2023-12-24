'use client'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'

import { CategoryList } from '@/types/category'

export default function CategoryItemsTab({ categories }: { categories: CategoryList }) {
  const params = useSearchParams()

  const currentMainCategory = params.get('main')
  const selectedSubCategory = params.get('sub')

  const currentSubCategories = categories.find((category) => category.name === currentMainCategory)
  const subCategories = currentSubCategories ? [{ name: '전체보기' }, ...currentSubCategories.subCategories] : []

  return (
    <nav className="sticky top-20 text-body-sm px-4 gap-10 bg-white flex justify-between z-10 border-b border-b-grayscale-50 overflow-x-scroll whitespace-nowrap">
      {subCategories.map((subCategory, index) => (
        <Link
          key={index}
          className={`pb-2 w-full text-center ${
            selectedSubCategory === subCategory.name
              ? 'text-brand-primary-500 border-b-2 border-brand-primary-500'
              : 'text-grayscale-400'
          }`}
          href={`/categoryItems?main=${currentMainCategory}&sub=${subCategory.name}`}
          replace
        >
          <div>{subCategory.name}</div>
        </Link>
      ))}
    </nav>
  )
}
