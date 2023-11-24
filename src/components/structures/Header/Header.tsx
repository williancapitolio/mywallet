import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../hooks/use-app-selector";

import { Navbar } from "../Navbar";

import * as S from "./HeaderStyles";
import { resetUser, toggleModal } from "../../../features/user/user-slice";
import { IconButton } from "../../buttons/IconButton";
import { BsPencilSquare, BsPersonX } from "react-icons/bs";
import { resetWallet } from "../../../features/wallet/wallet-slice";

export const Header = () => {
  const name = useAppSelector((state) => state.user.name);

  const dispatch = useDispatch();
  return (
    <S.Header>
      <S.Wrapper>
        <Navbar />
        <S.Hello>
          Olá, {name}{" "}
          <IconButton
            clickAction={() => dispatch(toggleModal())}
            bgColor={(props) => props.theme.colors.button.attention}
            icon={<BsPencilSquare />}
          />{" "}
          <IconButton
            clickAction={() => {
              dispatch(resetUser());
              dispatch(resetWallet());
            }}
            bgColor={(props) => props.theme.colors.button.danger}
            icon={<BsPersonX />}
          />
        </S.Hello>

        <S.Greetings>Seja bem-vindo&#40;a&#41;</S.Greetings>
      </S.Wrapper>
    </S.Header>
  );
};
