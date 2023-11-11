import { useDispatch } from "react-redux";
import { useAppSelector } from "./hooks/use-app-selector";
import { doDeposit, doWithdraw } from "./features/wallet/wallet-slice";
import { useState } from "react";
import { Transaction } from "./entities/Transaction";

export const App = () => {
  const balance = useAppSelector((state) => state.wallet.balance);
  const transactions = useAppSelector((state) => state.wallet.transactions);
  const dispatch = useDispatch();
  const [error, setError] = useState({ isError: false, message: "" });

  return (
    <>
      <h1>myWallet</h1>
      <span>Saldo: {balance}</span>
      <button
        onClick={() => {
          dispatch(
            doDeposit(
              new Transaction({ value: 10, description: "aa", type: "deposit" })
            )
          );
          error.isError && setError({ isError: false, message: "" });
        }}
      >
        Depositar
      </button>
      <button
        onClick={() => {
          try {
            dispatch(
              doWithdraw(
                new Transaction({
                  value: 10,
                  description: "bb",
                  type: "withdraw",
                })
              )
            );
          } catch (error) {
            if (error instanceof Error) {
              setError({ isError: true, message: error.message });
            } else {
              setError({ isError: true, message: "Algo deu errado!" });
            }
          }
        }}
      >
        Sacar
      </button>
      {error && <span>{error.message}</span>}
      <br />
      {transactions.length > 0 ? (
        transactions.map((transaction) => (
          <div key={transaction.id}>
            <span>{transaction.value}</span>
            <span>{transaction.description}</span>
            <span>{transaction.type}</span>
          </div>
        ))
      ) : (
        <span>Nenhuma transação realizada!</span>
      )}
    </>
  );
};
