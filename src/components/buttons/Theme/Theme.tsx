import { useDispatch } from "react-redux";

import { toggleTheme } from "../../../features/theme/theme-slice";

import { useAppSelector } from "../../../hooks/use-app-selector";

import { BiSolidMoon, BiSun } from "react-icons/bi";

import * as S from "./ThemeStyles";

export const Theme = () => {
  const dispatch = useDispatch();

  const theme = useAppSelector((state) => state.theme.title);

  return (
    <>
      {theme === "dark" ? (
        <S.Button onClick={() => dispatch(toggleTheme())}>
          <BiSun size="sm" name="toggle-theme" />
        </S.Button>
      ) : (
        <S.Button onClick={() => dispatch(toggleTheme())}>
          <BiSolidMoon size="sm" name="toggle-theme" />
        </S.Button>
      )}
    </>
  );
};

//xs, sm, md, lg
