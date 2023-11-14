import { useDispatch } from "react-redux";

import { useAppSelector } from "./hooks/use-app-selector";

import { resetWallet } from "./features/wallet/wallet-slice";

import {
  selectTotalDeposits,
  selectTotalWithdraws,
} from "./features/wallet/wallet-selectors";

import { FormTransaction } from "./components/FormTransaction";

export const App = () => {
  const balance = useAppSelector((state) => state.wallet.balance);
  const transactions = useAppSelector((state) => state.wallet.transactions);
  const error = useAppSelector((state) => state.wallet.error);

  const totalDeposits = useAppSelector(selectTotalDeposits);
  const totalWithdraw = useAppSelector(selectTotalWithdraws);

  const dispatch = useDispatch();

  return (
    <>
      <h1>myWallet</h1>
      <button
        onClick={() => dispatch(resetWallet())}
        disabled={localStorage.getItem("wallet-storage") ? false : true}
      >
        Resetar carteira
      </button>
      <br />

      <br />
      <span>Saldo: {balance}</span>
      <br />
      <br />
      <span>Total de Depositos: {totalDeposits}</span>
      <br />
      <span>Total de Saques: {totalWithdraw}</span>
      <br />

      <FormTransaction />
      <br />

      {error && <span>{error}</span>}
      <br />

      {transactions.length > 0 ? (
        transactions.map((transaction) => (
          <div key={transaction.id}>
            <span>{transaction.value}</span><br />
            <span>{transaction.description}</span><br />
            <span>{transaction.type}</span><br /><br />
          </div>
        ))
      ) : (
        <span>Nenhuma transação realizada!</span>
      )}
    </>
  );
};
