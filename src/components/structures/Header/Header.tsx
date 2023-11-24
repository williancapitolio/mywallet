import { useDispatch } from "react-redux";

import { resetUser, toggleModal } from "../../../features/user/user-slice";
import { resetWallet } from "../../../features/wallet/wallet-slice";

import { useAppSelector } from "../../../hooks/use-app-selector";

import { Navbar } from "../Navbar";
import { IconButton } from "../../buttons/IconButton";

import { BsPencilSquare, BsPersonX } from "react-icons/bs";

import * as S from "./HeaderStyles";

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
