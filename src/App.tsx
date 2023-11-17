import { useDispatch } from "react-redux";

import { useAppSelector } from "./hooks/use-app-selector";

import { deleteTransaction, resetWallet } from "./features/wallet/wallet-slice";

import {
  selectBalance,
  selectTotalDeposits,
  selectTotalWithdraws,
} from "./features/wallet/wallet-selectors";

import { formatToBRL } from "./services/format-to-brl";

import { FormTransaction } from "./components/forms/FormTransaction";
import { Header } from "./components/structures/Header";

export const App = () => {
  const transactions = useAppSelector((state) => state.wallet.transactions);

  const balance = formatToBRL(useAppSelector(selectBalance));

  const totalDeposits = formatToBRL(useAppSelector(selectTotalDeposits));

  const totalWithdraw = formatToBRL(useAppSelector(selectTotalWithdraws));

  const dispatch = useDispatch();

  const theme = useAppSelector((state) => state.theme.title);
  console.log(theme);
  return (
    <>
      <Header />
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
      <span>Saldo: R$ {balance}</span>
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
            <span>R$ {formatToBRL(transaction.value)}</span>
            <br />
            <span>{transaction.description}</span>
            <br />
            <span>{transaction.type === "deposit" ? "Depósito" : "Saque"}</span>
            <br />
            <button onClick={() => dispatch(deleteTransaction(transaction))}>
              Exluir
            </button>
            <br />
          </div>
        ))
      ) : (
        <span>Nenhuma transação realizada!</span>
      )}
    </>
  );
};
