import { fetchBestItemsFilterData } from '@/api/resource/home'
import Filters from '@/components/common/filters/Filters'

export default async function BestItemsLayout({ children }: { children: React.ReactNode }) {
  const filterData = await fetchBestItemsFilterData()

  // ---------------------------------------------------------
  // const filterName = {
  //   categoryCounts: '카테고리',
  //   brandCounts: '브랜드',
  //   priceRange: '가격',
  //   promotionCounts: '프로모션',
  // } as const

  // type FilterNameKey = keyof typeof filterName

  // function getFilterName(data: object, key: FilterNameKey): string {
  //   const categoryKey = Object.keys(data).find((category) => category === key)
  //   if (categoryKey) {
  //     return filterName[key]
  //   }
  //   return ''
  // }

  // for (const key in filterData) {
  //   console.log('????????????/', getFilterName(filterData, key as FilterNameKey))
  // }

  // console.log('!!!!!!!!!!!!!!!!!!!!!!!!!', getFilterName(filterData, 'categoryCounts'))
  // console.log(getFilterName(filterData, 'brandCounts'))
  // console.log(getFilterName(filterData, 'priceRange'))
  // console.log('filterData', filterData)

  // ---------------------------------------------------------

  return (
    <div className="relative flex flex-col">
      {/* // filter안에서 total갯수 계산 */}

      <Filters totalEliments={0} stickyLocation={'top-24'} filterData={filterData} />
      {children}
    </div>
  )
}
