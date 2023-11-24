import * as S from "./IconButtonStyles";

type IconButtonProps = {
  clickAction: () => void;
  bgColor: string;
  icon: React.ReactNode;
};

export const IconButton = ({ clickAction, bgColor, icon }: IconButtonProps) => {
  return (
    <S.Button onClick={clickAction} $bgcolor={bgColor}>
      {icon}
    </S.Button>
  );
};
