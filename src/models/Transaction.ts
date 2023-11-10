export interface Transaction {
  id?: number;
  value: number;
  type: "withdraw" | "deposit";
  description: string;
  createdAt?: Date;
}
