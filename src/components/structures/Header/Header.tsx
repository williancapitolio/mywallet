import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../hooks/use-app-selector";

import { Navbar } from "../Navbar";

import * as S from "./HeaderStyles";
import { toggleModal } from "../../../features/user/user-slice";
import { IconButton } from "../../buttons/IconButton";
import { BsPencilSquare } from "react-icons/bs";

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
            bgColor="#ffff00c7"
            icon={<BsPencilSquare />}
          />
        </S.Hello>

        <S.Greetings>Seja bem-vindo&#40;a&#41;</S.Greetings>
      </S.Wrapper>
    </S.Header>
  );
};
