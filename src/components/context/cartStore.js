// src/context/cartStore.js
import { create } from "zustand";

const useCartStore = create((set) => ({
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  liked: JSON.parse(localStorage.getItem("liked")) || [],

  addToCart: (item) =>
    set((state) => {
      const index = state.cart.findIndex((i) => i.id === item.id);
      let newCart;
      if (index < 0) {
        newCart = [...state.cart, { ...item, quantity: 1 }];
      } else {
        newCart = state.cart.map((cartItem, inx) =>
          inx === index
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      localStorage.setItem("cart", JSON.stringify(newCart));
      return { cart: newCart };
    }),

  addToLiked: (item) =>
    set((state) => {
      const newLiked = [...state.liked, item];
      localStorage.setItem("liked", JSON.stringify(newLiked));
      return { liked: newLiked };
    }),

  removeFromLiked: (itemId) =>
    set((state) => {
      const newLiked = state.liked.filter((i) => i.id !== itemId);
      localStorage.setItem("liked", JSON.stringify(newLiked));
      return { liked: newLiked };
    }),

  removeFromCart: (itemId) =>
    set((state) => {
      const newCart = state.cart.filter((i) => i.id !== itemId);
      localStorage.setItem("cart", JSON.stringify(newCart));
      return { cart: newCart };
    }),

  decrementCart: (item) =>
    set((state) => {
      const index = state.cart.findIndex((i) => i.id === item.id);
      let newCart = state.cart.map((cartItem, inx) =>
        inx === index
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
      newCart = newCart.filter((cartItem) => cartItem.quantity > 0); // Remove item if quantity is 0
      localStorage.setItem("cart", JSON.stringify(newCart));
      return { cart: newCart };
    }),

  deleteAllCart: () =>
    set(() => {
      localStorage.removeItem("cart");
      return { cart: [] };
    }),
}));

export default useCartStore;
