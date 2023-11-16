import { RootState } from "../../store";

export const selectBalance = (reducer: RootState) => {
  return reducer.wallet.transactions.reduce(
    (acc, curr) => acc + (curr.type === "deposit" ? +curr.value : -curr.value),
    0
  );
};

export const selectTotalDeposits = (reducer: RootState) => {
  return reducer.wallet.transactions
    .filter((transaction) => transaction.type === "deposit")
    .reduce((acc, curr) => acc + curr.value, 0);
};

export const selectTotalWithdraws = (reducer: RootState) => {
  return reducer.wallet.transactions
    .filter((transaction) => transaction.type === "withdraw")
    .reduce((acc, curr) => acc + curr.value, 0);
};
