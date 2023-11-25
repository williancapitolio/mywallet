import { /* useEffect,  */ useState } from "react";

import {
  BsArrowDown,
  BsArrowUp,
  BsCurrencyDollar,
  BsWallet2,
} from "react-icons/bs";

type dataCardProps = {
  idCard: number;
  icon: React.ReactNode;
  title: string;
  text: string;
};

export const useGetStartCard = () => {
  const dataCard: dataCardProps[] = [
    {
      idCard: 1,
      icon: <BsWallet2 className="cardIcon" />,
      title: "myWallet",
      text: "Gerenciador de carteira",
    },
    {
      idCard: 2,
      icon: <BsCurrencyDollar className="cardIcon" />,
      title: "Saldo",
      text: "Valor total",
    },
    {
      idCard: 3,
      icon: <BsArrowDown className="cardIcon" />,
      title: "Depósitos",
      text: "Todos os depósitos realizados",
    },
    {
      idCard: 4,
      icon: <BsArrowUp className="cardIcon" />,
      title: "Retiradas",
      text: "Todos as retiradas",
    },
  ];

  const [page, setPage] = useState(1);

  const cardQuantityArray = [];

  for (let i = 0; i < dataCard.length; i++) {
    cardQuantityArray.push(i);
  }

  /* useEffect(() => {
    const timer = setTimeout(() => {
      setPage((prev) => (prev === 4 ? 1 : (prev += 1)));
    }, 3000);
    console.log(page);
    () => clearTimeout(timer);
  }, [page]); */

  return { dataCard, page, setPage, cardQuantityArray };
};
