import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

export const store = configureStore({ reducer: { cart: cartReducer } });

store.subscribe(() => {
  try {
    localStorage.setItem('paradise-nursery-cart-v1', JSON.stringify(store.getState().cart.items));
  } catch {
    // Browsers that block storage can still use the cart during this session.
  }
});
