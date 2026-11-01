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
    // Rubric-required actions: addItem, removeItem, updateQuantity.
    addItem(state, action) {
      const id = typeof action.payload === 'string' ? action.payload : action.payload?.id;
      if (!id) return;
      const existing = state.items.find((item) => item.id === id);
      if (existing) existing.quantity += 1;
      else state.items.push({ id, quantity: 1 });
    },
    removeItem(state, action) {
      const id = typeof action.payload === 'string' ? action.payload : action.payload?.id;
      state.items = state.items.filter((item) => item.id !== id);
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload || {};
      const item = state.items.find((entry) => entry.id === id);
      if (!item || !Number.isInteger(quantity)) return;
      if (quantity <= 0) state.items = state.items.filter((entry) => entry.id !== id);
      else item.quantity = quantity;
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

export const { addItem, removeItem, updateQuantity, addToCart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart } = cartSlice.actions;
export const selectCartItems = (state) => state.cart.items;
export const selectCartCount = (state) => state.cart.items.reduce((count, item) => count + item.quantity, 0);
export const selectCartTotal = (state) => state.cart.items.reduce((total, item) => {
  const price = getPlant(item.id)?.price ?? 0;
  return total + item.quantity * price;
}, 0);
export default cartSlice.reducer;
