import {
  selectBalance,
  selectTotalDeposits,
  selectTotalWithdraws,
} from "../../../features/wallet/wallet-selectors";

import { useAppSelector } from "../../../hooks/use-app-selector";

import { formatToBRL } from "../../../services/format-to-brl";

import { Reset } from "../../buttons/Reset";

import { CardValue } from "../../cards/CardValue";

import { FormTransaction } from "../../forms/FormTransaction";

import { TableTransaction } from "../../tables/TableTransaction";

import {
  BsArrowDownCircle,
  BsArrowUpCircle,
  BsCurrencyDollar,
} from "react-icons/bs";

import * as S from "./MainStyles";

export const Main = () => {
  const balance = formatToBRL(useAppSelector(selectBalance));

  const totalDeposits = formatToBRL(useAppSelector(selectTotalDeposits));

  const totalWithdraw = formatToBRL(useAppSelector(selectTotalWithdraws));

  const CARDS_DATA = [
    {
      title: "Saldo",
      icon: <BsCurrencyDollar className="btn-icon" />,
      value: balance,
    },
    {
      title: "Depósitos",
      icon: <BsArrowDownCircle className="btn-icon" />,
      value: totalDeposits,
    },
    {
      title: "Retiradas",
      icon: <BsArrowUpCircle className="btn-icon" />,
      value: totalWithdraw,
    },
  ];

  return (
    <S.Main>
      <S.ContentCards>
        {CARDS_DATA.map((items, index) => (
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

      <Reset />
    </S.Main>
  );
};
