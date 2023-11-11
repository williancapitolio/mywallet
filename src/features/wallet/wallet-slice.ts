import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Wallet } from "../../models/Wallet";
import { Transaction } from "../../models/Transaction";

const WALLET_STORAGE = "wallet-storage";

const getInitialState = (): Wallet => {
  const localStorageState = localStorage.getItem(WALLET_STORAGE);
  if (!localStorageState)
    return {
      balance: 0,
      transactions: [],
    };
  return JSON.parse(localStorageState);
};

const initialState: Wallet = getInitialState();

export const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    doDeposit: (state, action: PayloadAction<Transaction>) => {
      state.balance += action.payload.value;
      state.transactions.push(action.payload);
      localStorage.setItem(WALLET_STORAGE, JSON.stringify(state));
    },
    doWithdraw: (state, action: PayloadAction<Transaction>) => {
      if (state.balance >= action.payload.value) {
        state.balance -= action.payload.value;
        state.transactions.push(action.payload);
        localStorage.setItem(WALLET_STORAGE, JSON.stringify(state));
      } else {
        throw new Error("Saldo insuficiente!");
      }
    },
  },
});

export const { doDeposit, doWithdraw } = walletSlice.actions;
