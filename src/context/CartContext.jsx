import { calculateTotal } from '@utils/helpers';
import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    setCartItems([...cartItems, { ...item, quantity: 1 }]);
  };

  const removeItemFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const increaseItemQuantity = (itemId) => {
    setCartItems((prevCartItems) => {
      return prevCartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      );
    });
  };

  const decreaseItemQuantity = (itemId) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = prevCartItems.map((item) => {
        if (item.id === itemId) {
          if (item.quantity === 1) {
            removeItemFromCart(itemId);
          } else {
            return { ...item, quantity: item.quantity - 1 };
          }
        }
        return item;
      });
      return updatedCartItems;
    });
  };

  const cartItemsCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartTotal = calculateTotal(cartItems);

  const isItemInCart = (itemId) => {
    return cartItems.some((item) => item.id === itemId);
  };

  const getCurrentQuantity = (itemId) => {
    return cartItems.find((item) => item.id === itemId)?.quantity || 0;
  };

  const cartContextValue = {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    clearCart,
    increaseItemQuantity,
    decreaseItemQuantity,
    cartItemsCount,
    cartTotal,
    isItemInCart,
    getCurrentQuantity,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};
