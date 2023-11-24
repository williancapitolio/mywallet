import { useDispatch } from "react-redux";

import { toggleTheme } from "../../../features/theme/theme-slice";

import { useAppSelector } from "../../../hooks/use-app-selector";

import { BsMoonFill, BsSun } from "react-icons/bs";

import * as S from "./ThemeStyles";

export const Theme = () => {
  const dispatch = useDispatch();

  const theme = useAppSelector((state) => state.theme.title);

  return (
    <S.Button onClick={() => dispatch(toggleTheme())}>
      {theme === "dark" ? (
        <BsSun className="btn-icon" />
      ) : (
        <BsMoonFill className="btn-icon" />
      )}
    </S.Button>
  );
};
