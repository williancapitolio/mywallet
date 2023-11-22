import styled from "styled-components";

export const Button = styled.button`
  color: ${(props) => props.theme.colors.text.primary};
  background-color: ${(props) => props.theme.colors.button.danger};
  /* border: 0.125rem solid ${(props) => props.theme.colors.text.primary}; */
  border: none;
  height: 2rem;
  width: 2rem;
  padding: 0.5rem;
  border-radius: 50%;
  
  &:hover {
    opacity: 0.85;
  }
`;
