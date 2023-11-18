import * as S from "./CardValueStyles";

type CardValueProps = {
  title: string;
  icon: React.ReactNode;
  value: string;
};

export const CardValue = ({ title, icon, value }: CardValueProps) => {
  return (
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.Icon>{icon}</S.Icon>
      <S.Content>R$ {value}</S.Content>
    </S.Card>
  );
};
