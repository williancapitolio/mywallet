import { ExecutionContext } from "styled-components";

import * as S from "./DefaultStyles";

type DefaultProps = {
  type: string | ((props: ExecutionContext) => string);
  btnAction: (ev: React.SyntheticEvent) => void;
  text: string;
};

export const Default = ({ type, btnAction, text }: DefaultProps) => {
  return (
    <S.Button $btntype={type} onClick={btnAction}>
      {text}
    </S.Button>
  );
};
