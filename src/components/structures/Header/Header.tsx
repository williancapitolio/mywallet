import { useAppSelector } from "../../../hooks/use-app-selector";

import { Navbar } from "../Navbar";

import * as S from "./HeaderStyles";

export const Header = () => {
  const name = useAppSelector((state) => state.user.name);

  return (
    <S.Header>
      <S.Wrapper>
        <Navbar />
        <S.Hello>Olá, {name}</S.Hello>
        <S.Greetings>Seja bem-vindo&#40;a&#41;</S.Greetings>
      </S.Wrapper>
    </S.Header>
  );
};
