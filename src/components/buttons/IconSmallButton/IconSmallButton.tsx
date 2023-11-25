type IconSmallButtonProps = {
  id: number;
  handleClick: () => void;
  icon: React.ReactNode;
};

import * as S from "./IconSmallButtonStyles";

export const IconSmallButton = ({
  id,
  handleClick,
  icon,
}: IconSmallButtonProps) => {
  return (
    <S.Button id={`${id}`} onClick={handleClick}>
      {icon}
    </S.Button>
  );
};
