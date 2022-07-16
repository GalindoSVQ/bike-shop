import Bike from "models/bike";
import { createContext, PropsWithChildren, useContext, useState } from "react";

type ShoppingCartContext = {
  getItemQuantity: (itemId: Bike["id"]) => number;
  increaseCart: (itemId: Bike["id"]) => void;
  decreaseCart: (itemId: Bike["id"]) => void;
  removeFromCart: (itemId: Bike["id"]) => void;
};

type CartItem = {
  id: Bike["id"];
  quantity: number;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: PropsWithChildren) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function getItemQuantity(itemId: CartItem["id"]) {
    return cartItems.find((item) => item.id === itemId)?.quantity || 0;
  }

  function increaseCart(itemId: CartItem["id"]) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === itemId)) {
        return [...currItems, { id: itemId, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === itemId) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });

    const item = cartItems.find((item) => item.id === itemId);
    if (item) {
      item.quantity += 1;
      setCartItems([...cartItems]);
    }
  }

  function decreaseCart(itemId: CartItem["id"]) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === itemId)?.quantity === 1) {
        return currItems.filter((item) => item.id !== itemId);
      } else {
        return currItems.map((item) => {
          if (item.id === itemId) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });

    const item = cartItems.find((item) => item.id === itemId);
    if (item) {
      item.quantity += 1;
      setCartItems([...cartItems]);
    }
  }

  function removeFromCart(itemId: CartItem["id"]) {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== itemId)
    );
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCart,
        decreaseCart,
        removeFromCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
