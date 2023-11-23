import styled from "styled-components";

export const Card = styled.section`
  width: 33%;
  height: 8rem;
  background-color: ${(props) => props.theme.colors.background.primary};
  box-shadow: ${(props) => props.theme.colors.boxShadow};
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  position: relative;

  @media (max-width: 48rem) {
    width: 100%;
  }
`;

export const Title = styled.h2`
  position: absolute;
  left: 0;
  top: 0;
  padding-top: 1rem;
  padding-left: 1rem;
`;

export const Icon = styled.span`
  position: absolute;
  right: 0;
  top: 0;
  padding-top: 1rem;
  padding-right: 1rem;
`;

export const Content = styled.span`
  font-size: 1.75rem;
  font-weight: 700;
  margin-top: 1rem;
  word-break: break-all;
  text-align: center;
  padding-inline: 1rem;

  @media (max-width: 20rem) {
    font-size: 1.5rem;
  }
`;
