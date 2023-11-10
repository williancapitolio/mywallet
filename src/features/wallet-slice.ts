import { createSlice } from "@reduxjs/toolkit";

import { Wallet } from "../models/Wallet";

const initialState: Wallet = {
  balance: 0,
  transactions: [],
};

export const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    doDeposit: () => {},
    doWithdrawal: () => {},
    listTransactions: () => {},
  },
});

export const { doDeposit, doWithdrawal, listTransactions } =
  walletSlice.actions;
