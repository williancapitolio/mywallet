import { useDispatch } from "react-redux";

import { toggleModal } from "../../features/user/user-slice";

import { Navbar } from "../../components/structures/Navbar";
import { Default } from "../../components/buttons/Default";

import { BsInfoCircle } from "react-icons/bs";

import * as S from "./LoginStyles";

export const Login = () => {
  const dispatch = useDispatch();

  return (
    <S.Login>
      <S.Wrapper>
        <Navbar />
        <p>
          <BsInfoCircle /> Para utilizar o <span>myWallet</span> é necessário
          informar o seu nome clicando no botão abaixo!
        </p>
        <Default
          type="start"
          btnAction={() => dispatch(toggleModal())}
          text="Começar"
        />
      </S.Wrapper>
    </S.Login>
  );
};
