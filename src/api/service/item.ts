import { ItemDetail, Product } from '@/types/item'
import { ProductType } from '@/types/product'

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
export const convertProductToProductType = (product: ProductType): Product => {
  const { id, name, brand, discountRate, discountedPrice, itemPrice, promotionImageUrl, reviewCount } = product
  return {
    id: id,
    name: name,
    brand: brand,
    discountRate: discountRate,
    discountedPrice: discountedPrice,
    itemPrice: itemPrice,
    promotionUrl: promotionImageUrl,
    reviewCount: reviewCount,
  }
}
