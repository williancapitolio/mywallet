import { useNavigate } from "react-router-dom";

import { useAppSelector } from "../../hooks/use-app-selector";

import { useCatchRouteError } from "../../hooks/use-catch-route-error";

import { Navbar } from "../../components/structures/Navbar";
import { Default } from "../../components/buttons/Default";

import * as S from "./ErrorBoundaryStyles";

export const ErrorBoundary = () => {
  const name = useAppSelector((state) => state.user.name);

  const errorMessage = useCatchRouteError();

  const navigate = useNavigate();

  const handleNavigate = () => {
    name ? navigate("/home") : navigate("/");
  };

  return (
    <S.ErrorBoundary>
      <S.Header>
        <Navbar />
      </S.Header>
      <S.Wrapper>
        <S.Status>
          {errorMessage === "Não autorizado!" ? "401" : "404"}
        </S.Status>
        <S.Message>{errorMessage}</S.Message>
        <Default
          type={(props) => props.theme.colors.button.ok}
          btnAction={handleNavigate}
          text={name ? "Voltar" : "Reiniciar"}
        />
      </S.Wrapper>
    </S.ErrorBoundary>
  );
};
