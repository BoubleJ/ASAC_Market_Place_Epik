import Image from 'next/image'

import { OrderItem } from '@/types/order'

interface IOrderProduct {
  content: OrderItem
}
export default function OrderProduct({ content }: IOrderProduct) {
  return (
    <div className="flex justify-start gap-[19px] items-center">
      <div className={''}>
        <Image src={content.promotionImageUrl} alt={`${content.itemName}`} width={42} height={55} />
      </div>
      <div className="flex flex-col gap-2 font-bold">
        <span>{content.itemName}</span>
        <div className="flex">
          <span>{content.totalPrice}</span>
          <span className="font-medium text-grayscale-400 line-through">{content.totalPrice * content.itemCount}</span>
          <span>{content.itemCount}개</span>
        </div>
      </div>
    </div>
  )
}

/**
 * <div className="flex flex-col col-span-10 gap-4">
        <span className="text-body-sm line-clamp-2">{product.name}</span>
        <div className="flex h-2/3 gap-4">
          {!product.promotionUrl.startsWith('http://example.com') ? (
            <Image width={70} height={90} src={product.promotionUrl} alt={`${product.name}`} />
          ) : (
            <Image width={70} height={90} src={'/images/default_product_image.svg'} alt={`${product.name}`} />
          )}
          <div className="flex flex-col justify-between">
            <span className="text-body-lg">{convertNumberFormat(product.itemPrice)}원</span>
            <div className="flex justify-between items-center border border-grayscale-100 h-fit w-[90px] h-[30px] rounded-lg">
              <Button variant={'none'} className="px-2 py-2 h-fit" onClick={handleDecreaseItemCount}>
                <IconMinusMono width={'1rem'} height={'1rem'} className="text-grayscale-400 hover:text-grayscale-900" />
              </Button>
              <span className="text-body-xs">{product.count}</span>
              <Button variant={'none'} className="px-2 py-2 h-fit" onClick={handleIncreaseItemCount}>
                <IconPlusMono width={'1rem'} height={'1rem'} className="text-grayscale-400 hover:text-grayscale-900" />
              </Button>
            </div>
          </div>
          <Button variant={'none'} className="ml-auto" onClick={handleModalDeleteItemFromCart}>
            <IconXMono width={'1.25rem'} height={'1.25rem'} className="text-grayscale-400 hover:text-grayscale-900" />
          </Button>
        </div>
      </div>
 */
