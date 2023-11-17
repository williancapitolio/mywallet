import { useDispatch } from "react-redux";

import { useAppSelector } from "../../../hooks/use-app-selector";

import {
  selectBalance,
  selectTotalDeposits,
  selectTotalWithdraws,
} from "../../../features/wallet/wallet-selectors";

import {
  deleteTransaction,
  resetWallet,
} from "../../../features/wallet/wallet-slice";

import { formatToBRL } from "../../../services/format-to-brl";

import { FormTransaction } from "../../forms/FormTransaction";

import * as S from "./MainStyles";

export const Main = () => {
  const dispatch = useDispatch();

  const transactions = useAppSelector((state) => state.wallet.transactions);

  const balance = formatToBRL(useAppSelector(selectBalance));

  const totalDeposits = formatToBRL(useAppSelector(selectTotalDeposits));

  const totalWithdraw = formatToBRL(useAppSelector(selectTotalWithdraws));

  return (
    <S.Main>
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
    </S.Main>
  );
};