import { useDispatch } from "react-redux";

import { toggleTheme } from "../../../features/theme/theme-slice";

import { useAppSelector } from "../../../hooks/use-app-selector";

import { BsMoonFill, BsSun } from "react-icons/bs";

import * as S from "./ThemeStyles";

export const Theme = () => {
  const dispatch = useDispatch();

  const theme = useAppSelector((state) => state.theme.title);

  return (
    <>
      {theme === "dark" ? (
        <S.Button onClick={() => dispatch(toggleTheme())}>
          <BsSun className="btn-icon" />
        </S.Button>
      ) : (
        <S.Button onClick={() => dispatch(toggleTheme())}>
          <BsMoonFill className="btn-icon" />
        </S.Button>
      )}
    </>
  );
};
