import { ItemDetail, Product } from '@/types/item'

export const convertItemDetailToProduct = (itemDetailData: ItemDetail): Product => {
  const { itemId, itemPrice, saleItemPrice, itemName, discountRate, promotionImageUrl, reviewCount } =
    itemDetailData.data
  return {
    id: itemId,
    name: itemName,
    brand: '',
    discountRate: discountRate,
    discountedPrice: saleItemPrice,
    itemPrice: itemPrice,
    promotionUrl: promotionImageUrl,
    reviewCount: reviewCount,
  }
}
