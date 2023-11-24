import * as S from "./DefaultInputStyles";

type DefaultInputtProps = {
  type: string;
  name: string;
  id: string;
  changeFunction: (ev: React.SyntheticEvent) => void;
  value: string | number;
};

export const DefaultInput = ({
  type,
  name,
  id,
  changeFunction,
  value,
}: DefaultInputtProps) => {
  return (
    <S.Input
      type={type}
      name={name}
      id={id}
      onChange={changeFunction}
      autoComplete="off"
      value={value}
    />
  );
};
