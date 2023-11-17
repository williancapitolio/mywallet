import styled from "styled-components";

export const Button = styled.button`
  background-color: inherit;
  border: none;
  height: 2rem;
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  &:hover {
    background-color: ${(props) => props.theme.colors.background.tertiary};
    border-radius: 2rem;
  }
`;
