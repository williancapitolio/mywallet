import styled from "styled-components";

export const Button = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 2rem;
  padding: 0.25rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  .cardIconBtn {
    font-size: 0.75rem;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.background.tertiary};
  }
`;
