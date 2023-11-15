import { useDispatch } from "react-redux";

import { useAppSelector } from "./hooks/use-app-selector";

import { resetWallet } from "./features/wallet/wallet-slice";

import {
  selectTotalDeposits,
  selectTotalWithdraws,
} from "./features/wallet/wallet-selectors";

import { FormTransaction } from "./components/FormTransaction";

export const App = () => {
  const balance = useAppSelector((state) =>
    state.wallet.balance.toFixed(2).toString().replace(".", ",")
  );

  const transactions = useAppSelector((state) => state.wallet.transactions);

  const totalDeposits = useAppSelector(selectTotalDeposits)
    .toFixed(2)
    .toString()
    .replace(".", ",");
  const totalWithdraw = useAppSelector(selectTotalWithdraws)
    .toFixed(2)
    .toString()
    .replace(".", ",");

  const dispatch = useDispatch();

  return (
    <>
      <h1>myWallet</h1>
      <button
        onClick={() => dispatch(resetWallet())}
        disabled={localStorage.getItem("wallet-storage") ? false : true}
        style={{
          visibility: localStorage.getItem("wallet-storage")
            ? "visible"
            : "hidden",
        }}
      >
        Resetar carteira
      </button>
      <br />

      <br />
      <span>Saldo: R$ {balance.toString().replace(".", ",")}</span>
      <br />
      <br />
      <span>Total de Depositos: R$ {totalDeposits}</span>
      <br />
      <span>Total de Saques: R$ {totalWithdraw}</span>
      <br />

      <FormTransaction />
      <br />

      {transactions.length > 0 ? (
        transactions.map((transaction) => (
          <div key={transaction.id}>
            <span>
              R$ {transaction.value.toFixed(2).toString().replace(".", ",")}
            </span>
            <br />
            <span>{transaction.description}</span>
            <br />
            <span>{transaction.type === "deposit" ? "Depósito" : "Saque"}</span>
            <br />
            <br />
          </div>
        ))
      ) : (
        <span>Nenhuma transação realizada!</span>
      )}
    </>
  );
};
