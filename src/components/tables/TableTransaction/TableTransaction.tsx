import { useDispatch } from "react-redux";

import { useAppSelector } from "../../../hooks/use-app-selector";

import { deleteTransaction } from "../../../features/wallet/wallet-slice";

import { formatToBRL } from "../../../services/format-to-brl";

import { Delete } from "../../buttons/Delete";

import * as S from "./TableTransactionStyles";

export const TableTransaction = () => {
  const transactions = useAppSelector((state) => state.wallet.transactions);

  const dispatch = useDispatch();

  return (
    <S.Wrapper>
      <S.Table>
        <S.TableHead>
          <S.TableRow>
            <S.TableHeader>Valor</S.TableHeader>
            <S.TableHeader>Tipo</S.TableHeader>
            <S.TableHeader>Descrição</S.TableHeader>
            <S.TableHeader>Ações</S.TableHeader>
          </S.TableRow>
        </S.TableHead>
        <S.TableBody>
          {transactions.length > 0 ? (
            transactions.map((transaction) => (
              <S.TableRow key={transaction.id}>
                <S.TableData>R$ {formatToBRL(transaction.value)}</S.TableData>
                <S.TableData>
                  {transaction.type === "deposit" ? "Depósito" : "Retirada"}
                </S.TableData>
                <S.TableData>{transaction.description}</S.TableData>
                <S.TableData>
                  <Delete
                    clickAction={() => dispatch(deleteTransaction(transaction))}
                  />
                </S.TableData>
              </S.TableRow>
            ))
          ) : (
            <S.TableRow>
              <S.TableData
                className="tdNoTransactions"
              >
                Nenhuma transação realizada!
              </S.TableData>
            </S.TableRow>
          )}
        </S.TableBody>
      </S.Table>
    </S.Wrapper>
  );
};
