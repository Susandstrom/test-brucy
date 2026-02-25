"use client";

import { createContext, useContext, useState } from "react";

export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export type CartItem = Product & {
  quantity: number;
};

export type CartContextType = {
  cart: CartItem[];        
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void; 
  totalPrice: number;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

//skickar min CART
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart måste användas inom CartProvider");
  }
  return context;
}
