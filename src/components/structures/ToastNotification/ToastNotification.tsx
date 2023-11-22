import * as S from "./ToastNotificationStyles";

type ToastNotificationProps = {
  error: string;
};

export const ToastNotification = ({ error }: ToastNotificationProps) => {
  return (
    <S.Wrapper>
      <p>{error}</p>
    </S.Wrapper>
  );
};
