import { BsTrash } from "react-icons/bs";

import * as S from "./DeleteStyles";

type DeleteProps = {
  clickAction: () => void;
};

export const Delete = ({ clickAction }: DeleteProps) => {
  return (
    <S.Button onClick={clickAction}>
      <BsTrash />
    </S.Button>
  );
};
