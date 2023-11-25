import { useGetStartCard } from "../../../hooks/use-get-start-card";

import { IconSmallButton } from "../../buttons/IconSmallButton";

import { BsCircle, BsCircleFill } from "react-icons/bs";

import * as S from "./CardGetStartStyles";

export const CardGetStart = () => {
  const { dataCard, page, setPage, cardQuantityArray } = useGetStartCard();

  return (
    <S.Card>
      <S.Icon>{dataCard[page - 1].icon}</S.Icon>
      <S.Title>{dataCard[page - 1].title}</S.Title>
      <S.Text>{dataCard[page - 1].text}</S.Text>
      <S.Pagination>
        {cardQuantityArray.map((id) => (
          <IconSmallButton
            key={id + 1}
            id={id + 1}
            handleClick={() => setPage(id + 1)}
            icon={
              dataCard[page - 1].idCard === id + 1 ? (
                <BsCircleFill className="cardIconBtn" />
              ) : (
                <BsCircle className="cardIconBtn" />
              )
            }
          />
        ))}
      </S.Pagination>
    </S.Card>
  );
};
