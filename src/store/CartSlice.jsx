import { createSlice } from '@reduxjs/toolkit';
import { getPlant } from '../data/plants';

const STORAGE_KEY = 'paradise-nursery-cart-v1';

function loadCart() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    if (!Array.isArray(stored)) return [];
    return stored.filter((item) => typeof item.id === 'string' && Number.isInteger(item.quantity) && item.quantity > 0)
      .map(({ id, quantity }) => ({ id, quantity }));
  } catch {
    return [];
  }
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: loadCart() },
  reducers: {
    addToCart(state, action) {
      const id = action.payload;
      const existing = state.items.find((item) => item.id === id);
      if (existing) return; // A plant can be added once from the catalog; adjust quantity in the cart.
      state.items.push({ id, quantity: 1 });
    },
    increaseQuantity(state, action) {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) item.quantity += 1;
    },
    decreaseQuantity(state, action) {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
      // Quantity bottoms out at 1; use Remove to delete the line item.
    },
    removeFromCart(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart } = cartSlice.actions;
export const selectCartItems = (state) => state.cart.items;
export const selectCartCount = (state) => state.cart.items.reduce((count, item) => count + item.quantity, 0);
export const selectCartTotal = (state) => state.cart.items.reduce((total, item) => {
  const price = getPlant(item.id)?.price ?? 0;
  return total + item.quantity * price;
}, 0);
export default cartSlice.reducer;
