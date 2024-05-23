import { create } from 'zustand';

const useCartStore = create((set) => ({
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  addToCart: (item) => set((state) => {
    const index = state.cart.findIndex(i => i.id === item.id);
    let newCart;
    if (index < 0) {
      newCart = [...state.cart, { ...item, quantity: 1 }];
    } else {
      newCart = state.cart.map((cartItem, inx) =>
        inx === index ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
    }
    localStorage.setItem("cart", JSON.stringify(newCart));
    return { cart: newCart };
  }),
  removeFromCart: (itemId) => set((state) => {
    const newCart = state.cart.filter(i => i.id !== itemId);
    localStorage.setItem("cart", JSON.stringify(newCart));
    return { cart: newCart };
  }),
  decrementCart: (item) => set((state) => {
    const index = state.cart.findIndex(i => i.id === item.id);
    let newCart = state.cart.map((cartItem, inx) =>
      inx === index ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
    );
    newCart = newCart.filter(cartItem => cartItem.quantity > 0); 
    localStorage.setItem("cart", JSON.stringify(newCart));
    return { cart: newCart };
  }),
}));

export default useCartStore;