import styled from "styled-components";

export const Submit = styled.button`
  height: 3.5rem;
  width: 6rem;
  background-color: ${(props) => props.theme.colors.button.ok};
  border-radius: 0.5rem;
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 700;
  border: 0.125rem solid ${(props) => props.theme.colors.text.primary};

  &:focus {
    outline: none;
  }

  &:hover {
    opacity: 0.85;
  }
`;
