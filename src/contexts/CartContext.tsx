import { createContext, useState } from 'react'

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
}

export const CartContext = createContext({} as CartContextType)
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<Product[]>([])

  function addToCart(product: Product) {
    const existingProduct = cartItems.find((item) => item.id === product.id)
    if (existingProduct) {
      const updatedCartItems = cartItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + product.quantity }
          : item,
      )
      setCartItems(updatedCartItems)
    }

    setCartItems((prev) => [...prev, product])
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}
