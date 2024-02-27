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
      <div className="col-span-10 flex flex-col gap-4">
        <span className="line-clamp-2 text-body-sm">{product.name}</span>
        <div className="flex h-2/3 gap-4">
          {!checkDummyImageUrl(product.promotionUrl) ? (
            <Image width={70} height={90} src={product.promotionUrl} alt={`${product.name}`} />
          ) : (
            <Image width={70} height={90} src={'/images/default_product_image.svg'} alt={`${product.name}`} />
          )}
          <div className="flex flex-col justify-between">
            <span className="text-body-lg">{convertNumberFormat(product.itemPrice)}원</span>
            <div className="flex h-[30px] h-fit w-[90px] items-center justify-between rounded-lg border border-grayscale-100">
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
