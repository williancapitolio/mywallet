import { configureStore } from "@reduxjs/toolkit";

import { walletSlice } from "../features/wallet/wallet-slice";
import { themeSlice } from "../features/theme/theme-slice";
import { userSlice } from "../features/user/user-slice";

export const store = configureStore({
  reducer: {
    wallet: walletSlice.reducer,
    theme: themeSlice.reducer,
    user: userSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
