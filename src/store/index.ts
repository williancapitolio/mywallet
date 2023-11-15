import { configureStore } from "@reduxjs/toolkit";

import { walletSlice } from "../features/wallet/wallet-slice";

export const store = configureStore({
  reducer: {
    wallet: walletSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
