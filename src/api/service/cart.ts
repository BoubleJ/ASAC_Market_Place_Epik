import { CartItem, CartItemCheckParam, CartItemDto } from '@/types/product'

export const convertCartitemDtosToCartItem = (cartitemDtos: CartItemDto[]): CartItem[] => {
  const cartItems: CartItem[] = cartitemDtos.map((item: CartItemDto) => {
    return {
      id: item.itemId,
      name: item.itemName,
      discountRate: item.discountRate,
      discountedPrice: item.salePrice,
      itemPrice: item.itemPrice,
      promotionUrl: item.promotionImageUrl,
      count: item.itemCount,
      selected: item.checked,
    }
  })
  return cartItems
}

export const encodeCartItemCheckParam = (product: CartItem): CartItemCheckParam => {
  const { id, selected } = product
  return {
    itemId: id,
    checked: !selected,
  }
}
