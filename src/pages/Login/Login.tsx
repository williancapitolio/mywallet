import { useDispatch } from "react-redux";

import { toggleModal } from "../../features/user/user-slice";

import { Navbar } from "../../components/structures/Navbar";

import * as S from "./LoginStyles";

export const Login = () => {
  const dispatch = useDispatch();

  return (
    <S.Login>
      <S.Wrapper>
        <Navbar />
        <p>
          Para utilizar o <span>myWallet</span> é necessário informar o seu nome
          clicando no botão abaixo!
        </p>
        <button onClick={() => dispatch(toggleModal())}>Começar</button>
      </S.Wrapper>
    </S.Login>
  );
};
