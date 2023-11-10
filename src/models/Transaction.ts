export interface Transaction {
  value: number;
  type: "withdraw" | "deposit";
  description: string;
  date: Date;
}
