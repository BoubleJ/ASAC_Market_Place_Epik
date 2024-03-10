import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { convertCartitemDtosToCartItem } from '@/api/service/cart'
import { Product } from '@/types/item'
import { CartItem, CartItemDto } from '@/types/product'

type CartState = {
  cartId: number
  cart: CartItem[]
}

type CartAction = {
  actions: {
    setCartId: (id: number) => void
    setCart: (cartDtos: CartItemDto[]) => void
    selectedItems: () => CartItem[]
    price: () => number
    discountPrice: () => number
    count: () => number
    selectedCount: () => number
    add: (product: Product) => void
    select: (ProductId: number) => void
    unSelect: (ProductId: number) => void
    selectAll: () => void
    unSelectAll: () => void
    increase: (ProductId: number) => void
    decrease: (ProductId: number) => void
    removeSelectedItem: () => void
    removeItem: (ProductId: number) => void
    removeAll: () => void
    isAllChecked: () => boolean
    isEmpty: () => boolean
  }
}

export type CartStore = CartState & CartAction

export const defaultCartInitialState: CartState = {
  cartId: 0,
  cart: [],
}

export const createCartStore = (initialState: CartState = defaultCartInitialState) => {
  return create<CartStore>()(
    devtools((set, get) => ({
      ...initialState,
      actions: {
        setCartId(id: number) {
          set({ cartId: id })
        },
        setCart: async (cartItemList: CartItemDto[]) => {
          const cartItems: CartItem[] = convertCartitemDtosToCartItem(cartItemList)
          set({ cart: cartItems })
        },
        selectedItems: () => {
          const { cart } = get()
          return CartController(cart).selectedItems().getCart()
        },
        price() {
          const { cart } = get()
          return CartController(cart).selectedItems().price()
        },
        discountPrice() {
          const { cart } = get()
          return CartController(cart).selectedItems().discountPrice()
        },
        count: () => {
          const { cart } = get()
          return CartController(cart).count()
        },
        selectedCount() {
          const { cart } = get()
          return CartController(cart).selectedItems().count()
        },
        add: (product: Product) => {
          const { cart } = get()
          const updatedCart = CartController(cart).add(product).getCart()
          set({ cart: updatedCart })
        },
        select(ProductId: number) {
          const { cart } = get()
          const updatedCart = CartController(cart).select(ProductId).getCart()
          set({ cart: updatedCart })
        },
        unSelect(ProductId: number) {
          const { cart } = get()
          const updatedCart = CartController(cart).unSelect(ProductId).getCart()
          set({ cart: updatedCart })
        },
        selectAll() {
          const { cart } = get()
          const updatedCart = CartController(cart).selectAll().getCart()
          set({ cart: updatedCart })
        },
        unSelectAll() {
          const { cart } = get()
          const updatedCart = CartController(cart).unSelectAll().getCart()
          set({ cart: updatedCart })
        },
        increase: (ProductId: number) => {
          const { cart } = get()
          const updatedCart = CartController(cart).increase(ProductId).getCart()
          set({ cart: updatedCart })
        },
        decrease: (ProductId: number) => {
          const { cart } = get()
          const updatedCart = CartController(cart).decrease(ProductId).getCart()
          set({ cart: updatedCart })
        },
        removeSelectedItem() {
          const { cart } = get()
          const updatedCart = CartController(cart).removeSelectedItem().getCart()
          set({ cart: updatedCart })
        },
        removeItem(ProductId: number) {
          const { cart } = get()
          const updatedCart = CartController(cart).removeItem(ProductId).getCart()
          set({ cart: updatedCart })
        },
        removeAll: () => {
          const { cart } = get()
          const updatedCart = CartController(cart).removeAll().getCart()
          set({ cart: updatedCart })
        },
        isAllChecked: () => {
          const { cart } = get()
          return CartController(cart).isAllChecked()
        },
        isEmpty: () => {
          const { cart } = get()
          return CartController(cart).isEmpty() || CartController(cart).selectedItems().price() === 0
        },
      },
    })),
  )
}

const CartController = (cart: CartItem[]) => ({
  add: (product: Product) => {
    //action
    const isExistInCart = cart.map((item) => item.id).includes(product.id)
    return CartController(!isExistInCart ? [...cart, { ...product, count: 1, selected: true } as CartItem] : cart)
  },
  select(ProductId: number) {
    if (cart.length) {
      return CartController(
        cart.map((item) => {
          return item.id === ProductId && !item.selected ? { ...item, selected: true } : item
        }),
      )
    }
    return CartController([])
  },
  unSelect(ProductId: number) {
    if (cart.length) {
      return CartController(
        cart.map((item) => {
          return item.id === ProductId && item.selected ? { ...item, selected: false } : item
        }),
      )
    }
    return CartController([])
  },
  selectAll() {
    return CartController(
      cart.map((item) => {
        return { ...item, selected: true }
      }),
    )
  },
  unSelectAll() {
    return CartController(
      cart.map((item) => {
        return { ...item, selected: false }
      }),
    )
  },
  selectedItems: () => {
    if (cart.length) return CartController(cart.filter((item) => item.selected === true))
    return CartController([])
  },
  increase: (ProductId: number) => {
    return CartController(
      cart.map((item) => {
        return item.id === ProductId ? { ...item, count: item.count + 1 } : item
      }),
    )
  },
  decrease: (ProductId: number) => {
    return CartController(
      cart.map((item) => {
        return item.id === ProductId ? { ...item, count: item.count - 1 } : item
      }),
    )
  },
  removeSelectedItem() {
    return CartController(
      cart.filter((item) => {
        return item.selected === false
      }),
    )
  },
  removeItem(ProductId: number) {
    return CartController(
      cart.filter((item) => {
        return item.id !== ProductId
      }),
    )
  },
  removeAll: () => {
    return CartController([])
  },
  count: () => {
    if (cart.length) return cart.map((item) => item.count).reduce((prev, curr) => prev + curr)
    return 0
  },
  selectedCount() {
    if (cart.length) return cart.filter((item) => item.selected === true).length
    return 0
  },
  price: () => {
    if (cart.length)
      return cart
        .map((item) => Math.floor((item.itemPrice - item.discountedPrice) * item.count))
        .reduce((prev, curr) => prev + curr)
    return 0
  },
  discountPrice() {
    if (cart.length)
      return cart.map((item) => Math.floor(item.discountedPrice * item.count)).reduce((prev, curr) => prev + curr)
    return 0
  },
  isAllChecked: () => {
    return cart.length ? !cart.some((item) => item.selected === false) : false
  },
  isEmpty: () => {
    return cart.length === 0
  },
  getCart: () => cart,
})
