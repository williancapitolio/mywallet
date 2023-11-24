import styled from "styled-components";

export const Input = styled.input`
  background-color: ${(props) => props.theme.colors.background.primary};
  padding: 0.5rem;
  border: 0.125rem solid ${(props) => props.theme.colors.text.primary};
  border-radius: 0.25rem;

  &:focus {
    outline: none;
    border: 0.125rem solid ${(props) => props.theme.colors.button.ok};
  }
`;
