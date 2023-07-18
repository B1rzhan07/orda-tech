import { configureStore } from "@reduxjs/toolkit";
import { foodApi } from "../Services/food";

export const store = configureStore({
  reducer: {
    [foodApi.reducerPath]: foodApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(foodApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
