import { Navbar } from "../../components/structures/Navbar";

import * as S from "./LoginStyles";

export const Login = () => {
  return (
    <S.Login>
      <S.Wrapper>
        <Navbar />
        <p>
          Para utilizar o <span>myWallet</span> é necessário informar o seu
          nome!
        </p>
      </S.Wrapper>
    </S.Login>
  );
};
