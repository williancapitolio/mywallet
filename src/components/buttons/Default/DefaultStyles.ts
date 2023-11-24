import styled from "styled-components";

type ButtonProps = {
  $btntype: string;
};

export const Button = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.$btntype === "cancel"
      ? props.theme.colors.background.primary
      : props.theme.colors.button.ok};
  border-radius: 0.5rem;
  border: 0.125rem solid ${(props) => props.theme.colors.text.primary};
  padding: 0.5rem;

  &:hover {
    opacity: 0.85;
  }
`;
