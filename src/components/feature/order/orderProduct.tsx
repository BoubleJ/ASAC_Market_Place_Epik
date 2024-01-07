import { OrderItem } from '@/types/order'

interface IOrderProduct {
  content: OrderItem
}
export default function OrderProduct({ content }: IOrderProduct) {
  const unDiscountPrice = content.itemPrice * content.itemCount
  const discountPrice = Math.floor(content.itemPrice * (content.discountRate / 100)) * content.itemCount
  const finalDiscountedPrice = unDiscountPrice - discountPrice
  return (
    <div className="flex flex-col gap-2 font-bold">
      <span>{content.itemName}</span>
      <div className="flex">
        <span>{finalDiscountedPrice}</span>
        <span className="font-medium text-grayscale-400 line-through">{unDiscountPrice}</span>
        <span>{content.itemCount}개</span>
      </div>
    </div>
  )
}
