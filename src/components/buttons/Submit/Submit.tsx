import * as S from "./SubmitStyles";

type SubmitProps = {
  text: string;
};

export const Submit = ({ text }: SubmitProps) => {
  return <S.Submit>{text}</S.Submit>;
};
