import { CartItem, CartItemDto } from '@/types/product'

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
      selected: true,
    }
  })
  return cartItems
}
