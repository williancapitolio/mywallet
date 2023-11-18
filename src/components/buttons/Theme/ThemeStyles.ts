import styled from "styled-components";

export const Button = styled.button`
  background-color: inherit;
  border: none;
  height: 2rem;
  width: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  position: absolute;
  top: 0;
  right: 0;
  margin: 1rem 1rem 0 0;

  &:hover {
    background-color: ${(props) => props.theme.colors.background.tertiary};
    border-radius: 2rem;
  }

  .btn-icon {
    font-size: 1.5rem;
  }
`;
