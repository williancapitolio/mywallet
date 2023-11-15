import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Wallet } from "../../models/Wallet";
import { Transaction } from "../../models/Transaction";

import { getLocalStorageData } from "../../services/get-local-storage-data";

const WALLET_STORAGE = "wallet-storage";

const DEFAULT_INITIAL_STATE: Wallet = {
  balance: 0,
  transactions: [],
};

const initialState = getLocalStorageData<Wallet>(
  WALLET_STORAGE,
  DEFAULT_INITIAL_STATE
);

export const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    doDeposit: (state, action: PayloadAction<Transaction>) => {
      state.balance += action.payload.value;
      state.transactions = [...state.transactions, action.payload];
      /* state.transactions.push(action.payload); */
      localStorage.setItem(WALLET_STORAGE, JSON.stringify(state));
    },
    doWithdraw: (state, action: PayloadAction<Transaction>) => {
      if (state.balance >= action.payload.value) {
        state.balance -= action.payload.value;
        state.transactions = [...state.transactions, action.payload];
        /* state.transactions.push(action.payload); */
      }
      localStorage.setItem(WALLET_STORAGE, JSON.stringify(state));
    },
    resetWallet: (state) => {
      state.balance = 0;
      state.transactions = [];
      localStorage.removeItem(WALLET_STORAGE);
    },
  },
});

export const { doDeposit, doWithdraw, resetWallet } = walletSlice.actions;
