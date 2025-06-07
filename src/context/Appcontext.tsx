// CounterContext.js
import React, {createContext, useState} from 'react';
import {Product} from '../interface/IProducts';

interface AppContextType {
  cart: Product[];
  addToCart: (item: Product) => void;
  increaseQty: (id: string) => void;
  reduceQty: (id: string) => void;
  clearCart: () => void;
  removeFromCart: (id: string) => void;
}

const defaultValue: AppContextType = {
  cart: [],
  addToCart: () => {},
  clearCart: () => {},
  removeFromCart: () => {},
  increaseQty: function (id: string): void {},
  reduceQty: function (id: string): void {},
};

export const AppContext = createContext<AppContextType>(defaultValue);

export const AppProvider = ({children}) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (item: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);

      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? {...cartItem, qty: (cartItem.qty || 1) + 1}
            : cartItem,
        );
      }

      //else here
      return [...prevCart, {...item, qty: 1}];
    });
  };

  function reduceQty(id: string) {
    setCart(prevCart => {
      return prevCart
        .map(item => {
          if (item.id === id) {
            const newQty = (item.qty || 1) - 1;
            return newQty > 0 ? {...item, qty: newQty} : null;
          }
          return item;
        })
        .filter(item => item !== null) as Product[];
    });
  }

  function increaseQty(id: string) {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === id
            ? {...cartItem, qty: (cartItem.qty || 1) + 1}
            : cartItem,
        );
      }
      return [...prevCart];
    });
  }
  const removeFromCart = (id: string) =>
    setCart(c => c.filter(item => item.id != id));
  const clearCart = () => setCart([]);

  return (
    <AppContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseQty,
        reduceQty,
      }}>
      {children}
    </AppContext.Provider>
  );
};
