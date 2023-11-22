import styled from "styled-components";

export const Button = styled.button`
  font-size: 0.75rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.text.primary};
  background-color: ${(props) => props.theme.colors.button.warning};
  border: 0.125rem solid ${(props) => props.theme.colors.text.primary};
  border-radius: 0.5rem;
  position: absolute;
  padding: 0.5rem;
  margin-right: 1rem;
  right: 0;
  top: -7.25rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  &:hover {
    opacity: 0.85;
  }
`;
