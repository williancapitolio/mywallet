import { BsX } from "react-icons/bs";

import * as S from "./ToastNotificationStyles";

type ToastNotificationProps = {
  icon: React.ReactNode;
  type: string;
  message: string;
  closeToastNotification: () => void;
};

export const ToastNotification = ({
  icon,
  type,
  message,
  closeToastNotification,
}: ToastNotificationProps) => {
  return (
    <S.Wrapper>
      <S.Icon>{icon}</S.Icon>
      <S.Content>
        <S.Type>{type}</S.Type>
        <S.Text>{message}</S.Text>
      </S.Content>
      <S.Close onClick={closeToastNotification}>
        <BsX className="btn-icon" />
      </S.Close>
    </S.Wrapper>
  );
};
