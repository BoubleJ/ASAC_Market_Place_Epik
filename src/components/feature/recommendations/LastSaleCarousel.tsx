'use client'

import SmallCard from '@/components/common/product/smallCard'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { ProductType } from '@/types/product'

interface ILastSaleCarousel {
  productList: ProductType[]
}

export default function LastSaleCarousel({ productList }: ILastSaleCarousel) {
  return (
    <>
      <Carousel className="w-full ">
        <CarouselContent className="-ml-4">
          {productList.map((product: ProductType) => (
            <CarouselItem key={product.id} className="h-full basis-36">
              <div className="">
                <SmallCard product={product} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  )
}
