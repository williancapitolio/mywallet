import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Wallet } from "../models/Wallet";
import { Transaction } from "../models/Transaction";

const initialState: Wallet = {
  balance: 0,
  transactions: [],
};

export const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    doDeposit: (state, action: PayloadAction<Transaction>) => {
      state.balance += action.payload.value;
      state.transactions.push(action.payload);
    },
    doWithdrawal: (state, action: PayloadAction<Transaction>) => {
      state.balance -= action.payload.value;
      state.transactions.push(action.payload);
    },
  },
});

export const { doDeposit, doWithdrawal } = walletSlice.actions;
