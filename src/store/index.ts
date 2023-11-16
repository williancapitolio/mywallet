import { configureStore } from "@reduxjs/toolkit";

import { walletSlice } from "../features/wallet/wallet-slice";
import { themeSlice } from "../features/theme/theme-slice";

export const store = configureStore({
  reducer: {
    wallet: walletSlice.reducer,
    theme: themeSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
