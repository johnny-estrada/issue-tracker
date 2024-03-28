import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import searchReducer from "./slices/searchSlice";
import { apiSlice } from "./slices/apiSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    search: searchReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type
export type AppDispatch = typeof store.dispatch;

export default store;
