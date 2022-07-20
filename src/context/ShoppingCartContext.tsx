import Bike from "models/bike";
import { createContext, PropsWithChildren, useContext, useState } from "react";
import { useLocalStore } from "hooks";
import { formatCurrency, removePoints } from "utilities";

type ShoppingCartContext = {
  addToCart: (itemId: Bike) => void;
  cartItems: Bike[];
  cartQuantity: number;
  removeFromCart: (itemId: Bike["id"]) => void;
  total: string;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: PropsWithChildren) {
  const [cartItems, setCartItems] = useLocalStore<Bike[]>("cart", []);

  function addToCart(newItem: Bike) {
    if (cartItems.find((item) => item.id === newItem.id)) {
      return;
    }

    setCartItems([...cartItems, newItem]);
  }

  function removeFromCart(itemId: Bike["id"]) {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  }

  function getTotal() {
    const totalAmount = cartItems.reduce((acc, item) => {
      const formattedPrice = removePoints(item.price);

      return acc + +formattedPrice;
    }, 0);

    return formatCurrency(totalAmount.toString());
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        addToCart,
        cartItems,
        cartQuantity: cartItems.length,
        removeFromCart,
        total: getTotal(),
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
