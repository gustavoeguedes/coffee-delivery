import { createContext, useState } from 'react'
import { produce } from 'immer'

export interface Product {
  id: number
  name: string
  flags: string[]
  description: string
  priceInCents: number
  image: string
  quantity: number
}

interface Order {
  id: number
  products: Product[]
  street: string
  number: string
  neighborhood: string
  city: string
  uf: string
  paymentMethod: 'credit' | 'debit' | 'money'
  cep: string
  complement: string | null
}

interface CartContextType {
  cartItems: Product[]
  addToCart: (product: Product) => void
  removeFromCart: (productId: number) => void
  incrementQuantity: (productId: number) => void
  decrementQuantity: (productId: number) => void
  finishOrder: (order: Order) => void
  order: Order | null
}

export const CartContext = createContext({} as CartContextType)
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<Product[]>([])
  const [order, setOrder] = useState<Order | null>(null)

  function addToCart(product: Product) {
    setCartItems((currentCart) =>
      produce(currentCart, (draft) => {
        const existingProduct = draft.find((item) => item.id === product.id)
        if (existingProduct) {
          existingProduct.quantity += product.quantity
        } else {
          draft.push(product)
        }
      }),
    )
  }

  function removeFromCart(productId: number) {
    setCartItems((currentCart) =>
      produce(currentCart, (draft) => {
        const productIndex = draft.findIndex((item) => item.id === productId)
        if (productIndex !== -1) {
          draft.splice(productIndex, 1)
        }
      }),
    )
  }

  function incrementQuantity(productId: number) {
    setCartItems((currentCart) =>
      produce(currentCart, (draft) => {
        const product = draft.find((item) => item.id === productId)
        if (product) {
          product.quantity += 1
        }
      }),
    )
  }
  function decrementQuantity(productId: number) {
    setCartItems((currentCart) =>
      produce(currentCart, (draft) => {
        const product = draft.find((item) => item.id === productId)
        if (product && product.quantity > 1) {
          product.quantity -= 1
        }
      }),
    )
  }
  function finishOrder(orderData: Order) {
    setOrder(orderData)
    setCartItems([])
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
        finishOrder,
        order,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
