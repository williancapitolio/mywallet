import { configureStore } from "@reduxjs/toolkit";

import { walletSlice } from "../features/wallet/wallet-slice";

export const store = configureStore({
  reducer: {
    wallet: walletSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
