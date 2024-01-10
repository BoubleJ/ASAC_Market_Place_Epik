'use client'

import SmallCard from '@/components/common/product/smallCard'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { ProductType } from '@/types/product'

interface ILastSaleCarousel {
  productList: ProductType[]
}

export default function LastSaleCarousel({ productList }: ILastSaleCarousel) {
  return (
    <>
      <Carousel className="w-full max-w-xs">
        <CarouselContent className="">
          {productList.map((product: ProductType) => (
            <CarouselItem key={product.id} className="flex-none w-32 h-full basis-1/2">
              <div className="p-1">
                <SmallCard product={product} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="w-7 h-7 -left-7 top-1/3 -translate-y-1/2" />
        <CarouselNext className="w-7 h-7 -right-7 top-1/3 -translate-y-1/2" />
      </Carousel>
    </>
  )
}
