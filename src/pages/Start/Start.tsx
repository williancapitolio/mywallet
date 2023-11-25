import { useDispatch } from "react-redux";

import { toggleModal } from "../../features/user/user-slice";

import { Navbar } from "../../components/structures/Navbar";
import { CardGetStart } from "../../components/cards/CardGetStart";
import { Default } from "../../components/buttons/Default";

import { BsInfoCircle } from "react-icons/bs";

import * as S from "./StartStyles";

export const Start = () => {
  const dispatch = useDispatch();

  return (
    <S.Start>
      <S.Header>
        <Navbar />
      </S.Header>
      <S.Wrapper>
        <CardGetStart />
        <S.InfoText>
          <BsInfoCircle className="iconInfo" /> Para utilizar o{" "}
          <S.InfoTitle>myWallet</S.InfoTitle> é necessário informar o seu nome
          clicando no botão abaixo!
        </S.InfoText>
        <Default
          type={(props) => props.theme.colors.button.ok}
          btnAction={() => dispatch(toggleModal())}
          text="Começar"
        />
      </S.Wrapper>
    </S.Start>
  );
};
