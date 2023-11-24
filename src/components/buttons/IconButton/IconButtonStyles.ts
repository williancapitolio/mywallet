import styled from "styled-components";

type IconButtonStylesProps = {
  $bgcolor: string;
};

export const Button = styled.button<IconButtonStylesProps>`
  color: ${(props) => props.theme.colors.text.primary};
  background-color: ${(props) => props.$bgcolor};
  border: none;
  height: 2rem;
  width: 2rem;
  padding: 0.5rem;
  border-radius: 50%;

  &:hover {
    opacity: 0.85;
  }
`;
