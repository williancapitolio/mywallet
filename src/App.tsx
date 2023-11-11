import { useDispatch } from "react-redux";

import { useAppSelector } from "./hooks/use-app-selector";

import {
  doDeposit,
  doWithdraw,
  resetWallet,
} from "./features/wallet/wallet-slice";

import { Transaction } from "./entities/Transaction";

export const App = () => {
  const balance = useAppSelector((state) => state.wallet.balance);
  const transactions = useAppSelector((state) => state.wallet.transactions);
  const error = useAppSelector((state) => state.wallet.error);

  const dispatch = useDispatch();

  return (
    <>
      <h1>myWallet</h1>
      <button onClick={() => dispatch(resetWallet())} disabled={localStorage.getItem("wallet-storage") ? false : true}>Resetar carteira</button>
      <br />
      <span>Saldo: {balance}</span>
      <button
        onClick={() => {
          dispatch(
            doDeposit(
              new Transaction({ value: 10, description: "aa", type: "deposit" })
            )
          );
        }}
      >
        Depositar
      </button>
      <button
        onClick={() => {
          dispatch(
            doWithdraw(
              new Transaction({
                value: 10,
                description: "bb",
                type: "withdraw",
              })
            )
          );
        }}
      >
        Sacar
      </button>
      {error.message && <span>{error.message}</span>}
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
