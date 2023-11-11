import { Transaction } from "./Transaction";

export interface Wallet {
  balance: number;
  transactions: Array<Transaction>;
  error: Error;
}
