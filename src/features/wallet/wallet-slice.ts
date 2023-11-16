import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { getLocalStorageData } from "../../services/get-local-storage-data";

import { Wallet } from "../../models/Wallet";
import { Transaction } from "../../models/Transaction";

const WALLET_STORAGE = "wallet-storage";

const DEFAULT_INITIAL_STATE: Wallet = {
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
      state.transactions = [...state.transactions, action.payload];
      /* state.transactions.push(action.payload); */
      localStorage.setItem(WALLET_STORAGE, JSON.stringify(state));
    },
    doWithdraw: (state, action: PayloadAction<Transaction>) => {
      if (
        state.transactions.reduce(
          (acc, curr) =>
            acc + (curr.type === "deposit" ? +curr.value : -curr.value),
          0
        ) >= action.payload.value
      ) {
        state.transactions = [...state.transactions, action.payload];
        /* state.transactions.push(action.payload); */
        localStorage.setItem(WALLET_STORAGE, JSON.stringify(state));
      }
    },
    resetWallet: (state) => {
      state.transactions = [];
      localStorage.removeItem(WALLET_STORAGE);
    },
    deleteTransaction: (state, action: PayloadAction<Transaction>) => {
      state.transactions = state.transactions.filter(
        (transaction) => transaction.id !== action.payload.id
      );
      state.transactions.length > 0
        ? localStorage.setItem(WALLET_STORAGE, JSON.stringify(state))
        : localStorage.removeItem(WALLET_STORAGE);
    },
  },
});

export const { doDeposit, doWithdraw, resetWallet, deleteTransaction } =
  walletSlice.actions;
