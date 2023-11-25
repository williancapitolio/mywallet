import styled, { ExecutionContext } from "styled-components";

type ButtonProps = {
  $btntype: string | ((props: ExecutionContext) => string);
};

export const Button = styled.button<ButtonProps>`
  background-color: ${(props) => props.$btntype};
  border-radius: 0.5rem;
  border: 0.125rem solid ${(props) => props.theme.colors.text.primary};
  padding: 0.5rem;

  &:hover {
    opacity: 0.85;
  }
`;
