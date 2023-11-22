import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.button.danger};
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  width: fit-content;
  border-radius: 0.5rem;
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 1rem;
`;

export const Icon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  .btn-icon {
    font-size: 1.5rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Type = styled.h3`
  font-size: 1.15rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
`;

export const Text = styled.p`
  font-size: 0.85rem;
`;

export const Close = styled.span`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  &:hover {
    opacity: 0.85;
  }

  .btn-icon {
    font-size: 1.75rem;
  }
`;
