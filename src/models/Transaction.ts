export interface Transaction {
  id: number;
  value: number;
  type: "" | "deposit" | "withdraw";
  description: string;
  createdAt: Date;
}
