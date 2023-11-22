import { useDispatch } from "react-redux";

import { resetWallet } from "../../../features/wallet/wallet-slice";

import { BsArrowDownRightCircle } from "react-icons/bs";

import * as S from "./ResetStyles";

export const Reset = () => {
  const dispatch = useDispatch();

  return (
    <S.Button
      onClick={() => dispatch(resetWallet())}
      style={{
        visibility: localStorage.getItem("wallet-storage")
          ? "visible"
          : "hidden",
      }}
    >
      Resetar <BsArrowDownRightCircle />
    </S.Button>
  );
};
