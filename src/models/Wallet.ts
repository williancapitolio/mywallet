import { Transaction } from "./Transaction";

export interface Wallet {
  transactions: Array<Transaction>;
}
