

import { Theme } from "../../buttons/Theme";

import * as S from "./HeaderStyles";

export const Header = () => {
  return (
    <S.Header>
      <S.Wrapper>
        <S.Navbar>
          <S.Title>myWallet</S.Title>
          <Theme />
        </S.Navbar>
        <S.Hello>Olá, Nome</S.Hello>
        <S.Greetings>Seja bem-vindo&#40;a&#41;</S.Greetings>
      </S.Wrapper>
    </S.Header>
  );
};
