import { useDispatch } from "react-redux";

import { useAppSelector } from "../../../hooks/use-app-selector";

import {
  selectBalance,
  selectTotalDeposits,
  selectTotalWithdraws,
} from "../../../features/wallet/wallet-selectors";

import { resetWallet } from "../../../features/wallet/wallet-slice";

import { formatToBRL } from "../../../services/format-to-brl";

import { FormTransaction } from "../../forms/FormTransaction";

import * as S from "./MainStyles";
import { CardValue } from "../../cards/CardValue";

import {
  BsArrowDownCircle,
  BsArrowUpCircle,
  BsCurrencyDollar,
} from "react-icons/bs";
import { TableTransaction } from "../../tables/TableTransaction";

export const Main = () => {
  const dispatch = useDispatch();

  const balance = formatToBRL(useAppSelector(selectBalance));

  const totalDeposits = formatToBRL(useAppSelector(selectTotalDeposits));

  const totalWithdraw = formatToBRL(useAppSelector(selectTotalWithdraws));

  const cardsData = [
    {
      title: "Saldo",
      icon: <BsCurrencyDollar className="btn-icon" />,
      value: balance,
    },
    {
      title: "Entradas",
      icon: <BsArrowDownCircle className="btn-icon" />,
      value: totalDeposits,
    },
    {
      title: "Saídas",
      icon: <BsArrowUpCircle className="btn-icon" />,
      value: totalWithdraw,
    },
  ];

  return (
    <S.Main>
      <S.ContentCards>
        {cardsData.map((items, index) => (
          <CardValue
            key={index}
            title={items.title}
            icon={items.icon}
            value={items.value}
          />
        ))}
      </S.ContentCards>

      <FormTransaction />

      <TableTransaction />

      <button
        onClick={() => dispatch(resetWallet())}
        style={{
          visibility: localStorage.getItem("wallet-storage")
            ? "visible"
            : "hidden",
        }}
      >
        Resetar carteira
      </button>
    </S.Main>
  );
};
