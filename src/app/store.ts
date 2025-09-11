import { configureStore } from "@reduxjs/toolkit";
import auth from "../features/auth/store/authSlice";
import product from "../features/products/store/productsSlice";

export const store = configureStore({
  reducer: {
    auth,
    product,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
