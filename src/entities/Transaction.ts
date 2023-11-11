import { Transaction as TransactionInterface } from "../models/Transaction";

export class Transaction implements TransactionInterface {
  readonly id: number;
  readonly value: number;
  readonly type: "withdraw" | "deposit";
  readonly description: string;
  readonly createdAt: Date;

  constructor({
    value,
    type,
    description,
  }: Pick<Transaction, "value" | "type" | "description">) {
    this.id = Math.floor(Math.random() * 1000000);
    this.value = value;
    this.type = type;
    this.description = description;
    this.createdAt = new Date();
  }
}