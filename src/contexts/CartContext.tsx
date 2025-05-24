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

interface CartContextType {
  cartItems: Product[]
  addToCart: (product: Product) => void
  removeFromCart: (productId: number) => void
}

export const CartContext = createContext({} as CartContextType)
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<Product[]>([])

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

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}
