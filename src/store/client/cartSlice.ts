import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { convertCartitemDtosToCartItem } from '@/api/service/cart'
import { Product } from '@/types/item'
import { Cart, CartItem, CartItemDto } from '@/types/product'

type CartStore = {
  cartInfo: Omit<Cart, 'cartItemDtos'>
  cartId: number
  cart: CartItem[]
  setCartId: (id: number) => void
  setCart: (cartDtos: CartItemDto[]) => void
  selectedItems: () => CartItem[]
  unSelectedItems: () => CartItem[]
  price: () => number
  discountPrice: () => number
  count: () => number
  selectedCount: () => number
  add: (product: Product) => void
  select: (ProductId: number) => void
  unSelect: (ProductId: number) => void
  selectAll: () => void
  unSelectAll: () => void
  decrease: (ProductId: number) => void
  removeSelectedItem: () => void
  removeItem: (ProductId: number) => void
  removeAll: () => void
}

const DUMMY_CART_ITEMS: CartItem[] = [
  {
    id: 1,
    name: '[누터스가든] CAT 누터스픽 짜먹는 간식 2종',
    brand: '누터스가든',
    discountRate: 35,
    discountedPrice: 4485,
    itemPrice: 6900,
    promotionUrl: '/images/hotdog.svg',
    reviewCount: 80,
    count: 2,
    selected: true,
  },
  {
    id: 2,
    name: '[누터스가든] DOG 누터스픽 짜먹는 간식 2종',
    promotionUrl: '/images/ricedog.svg',
    discountRate: 35,
    discountedPrice: 4485,
    itemPrice: 6900,
    reviewCount: 80,
    brand: '누터스가든',
    count: 1,
    selected: false,
  },
]

export const useCartStore = create<CartStore>()(
  devtools((set, get) => ({
    // cart: [...DUMMY_CART_ITEMS],
    cartInfo: { cartId: 0, amount: 0, salesTotalAmount: 0, totalAmount: 0 },
    cartId: 0,
    cart: [],
    setCartId(id: number) {
      set({ cartId: id })
    },
    setCart: async (cartItemList: CartItemDto[]) => {
      const cartItems: CartItem[] = convertCartitemDtosToCartItem(cartItemList)
      set({ cart: cartItems })
    },
    selectedItems: () => {
      const { cart } = get()
      if (cart.length) return cart.filter((item) => item.selected === true)
      return []
    },
    unSelectedItems: () => {
      const { cart } = get()
      if (cart.length) return cart.filter((item) => item.selected === false)
      return []
    },
    price() {
      const { cart } = get()
      const items = cart.filter((item) => item.selected === true)
      if (items.length)
        return (
          items
            .map((item) => Math.floor((item.itemPrice - item.discountedPrice) * item.count))
            // .map((item) => Math.floor(item.itemPrice - item.itemPrice * (item.discountRate / 100)) * item.count)
            .reduce((prev, curr) => prev + curr)
        )
      return 0
    },
    discountPrice() {
      const { cart } = get()
      const items = cart.filter((item) => item.selected === true)
      if (items.length)
        return (
          items
            .map((item) => Math.floor(item.discountedPrice * item.count))
            // .map((item) => Math.floor(item.itemPrice * (item.discountRate / 100)) * item.count)
            .reduce((prev, curr) => prev + curr)
        )
      return 0
    },
    count: () => {
      const { cart } = get()
      if (cart.length) return cart.map((item) => item.count).reduce((prev, curr) => prev + curr)
      return 0
    },
    selectedCount() {
      const { cart } = get()
      if (cart.length) return cart.filter((item) => item.selected === true).length
      return 0
    },
    add: (product: Product) => {
      const { cart } = get()
      const updatedCart = updateCart(product, cart)
      set({ cart: updatedCart })
    },
    select(ProductId: number) {
      const { cart } = get()
      const updatedCart = updateSelectfield(ProductId, cart)
      set({ cart: updatedCart })
    },
    unSelect(ProductId: number) {
      const { cart } = get()
      const updatedCart = updateSelectfield(ProductId, cart)
      set({ cart: updatedCart })
    },
    selectAll() {
      const { cart } = get()
      const updatedCart = selectAllCartItem(cart)
      set({ cart: updatedCart })
    },
    unSelectAll() {
      const { cart } = get()
      const updatedCart = unSelectAllCartItem(cart)
      set({ cart: updatedCart })
    },
    decrease: (ProductId: number) => {
      const { cart } = get()
      const updatedCart = removeCart(ProductId, cart)
      set({ cart: updatedCart })
    },
    removeSelectedItem() {
      const { cart } = get()
      const updatedCart = removeSelected(cart)
      set({ cart: updatedCart })
    },
    removeItem(ProductId: number) {
      const { cart } = get()
      const updatedCart = removeFromCart(ProductId, cart)
      set({ cart: updatedCart })
    },
    removeAll: () => set({ cart: [] }),
  })),
)

function updateCart(product: Product, cart: CartItem[]): CartItem[] {
  const cartItem = { ...product, count: 1, selected: true } as CartItem
  const productOnCart = cart.map((item) => item.id).includes(product.id)

  if (!productOnCart) {
    cart.push(cartItem)
  } else {
    return cart.map((item) => {
      if (item.id === product.id) return { ...item, count: item.count + 1 } as CartItem
      return item
    })
  }

  return cart
}

function updateSelectfield(ProductId: number, cart: CartItem[]) {
  return cart.map((item) => {
    if (item.id === ProductId) {
      if (item.selected === true) {
        return { ...item, selected: false, count: 1 }
      } else {
        return { ...item, selected: true, count: 1 }
      }
    }
    return item
  })
}

function selectAllCartItem(cart: CartItem[]) {
  return cart.map((item) => {
    return { ...item, selected: true }
    return item
  })
}
function unSelectAllCartItem(cart: CartItem[]) {
  return cart.map((item) => {
    return { ...item, selected: false }
    return item
  })
}
function removeCart(ProductId: number, cart: CartItem[]): CartItem[] {
  return cart
    .map((item) => {
      if (item.id === ProductId) return { ...item, count: item.count - 1 }
      return item
    })
    .filter((item) => {
      return item.count
    })
}

function removeFromCart(ProductId: number, cart: CartItem[]): CartItem[] {
  return cart.filter((item) => {
    return item.id !== ProductId
  })
}

function removeSelected(cart: CartItem[]) {
  return cart.filter((item) => {
    return item.selected !== true
  })
}
