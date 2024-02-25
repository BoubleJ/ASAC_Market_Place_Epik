import Image from 'next/image'

import {
  CartItemDecreaseButton,
  CartItemDeleteButton,
  CartItemIncreaseButton,
  CartItemSelectButton,
} from '@/components/feature/cart/CartButtons'
import { checkDummyImageUrl, convertNumberFormat } from '@/lib/utils'
import { CartItem } from '@/types/product'

interface ICartItemCard {
  product: CartItem
}

export default function CartItemCard({ product }: ICartItemCard) {
  return (
    <div className="grid grid-cols-12">
      <CartItemSelectButton product={product} />
      <div className="flex flex-col col-span-10 gap-4">
        <span className="text-body-sm line-clamp-2">{product.name}</span>
        <div className="flex h-2/3 gap-4">
          {!checkDummyImageUrl(product.promotionUrl) ? (
            <Image width={70} height={90} src={product.promotionUrl} alt={`${product.name}`} />
          ) : (
            <Image width={70} height={90} src={'/images/default_product_image.svg'} alt={`${product.name}`} />
          )}
          <div className="flex flex-col justify-between">
            <span className="text-body-lg">{convertNumberFormat(product.itemPrice)}원</span>
            <div className="flex justify-between items-center border border-grayscale-100 h-fit w-[90px] h-[30px] rounded-lg">
              <CartItemDecreaseButton product={product} />
              <span className="text-body-xs">{product.count}</span>
              <CartItemIncreaseButton product={product} />
            </div>
          </div>
          <CartItemDeleteButton product={product} />
        </div>
      </div>
    </div>
  )
}
