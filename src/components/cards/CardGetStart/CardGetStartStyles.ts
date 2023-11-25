import styled from "styled-components";

export const Card = styled.section`
  background-color: ${(props) => props.theme.colors.background.secondary};
  box-shadow: ${(props) => props.theme.colors.boxShadow};
  border-radius: 0.5rem;
  height: 50%;
  max-height: 50rem;
  min-height: 22rem;
  width: 80%;
  max-width: 30rem;
  padding: 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 5rem;
`;

export const Icon = styled.span`
  background-color: ${(props) => props.theme.colors.button.ok};
  box-shadow: ${(props) => props.theme.colors.boxShadow};
  border-radius: 50%;

  .cardIcon {
    font-size: 10rem;
  }

  @media (max-width: 20rem) {
    .cardIcon {
      font-size: 7.5rem;
    }
  }
`;

export const Title = styled.h3`
  font-weight: 700;
`;

export const Text = styled.p`
  font-size: 0.85rem;
  color: ${(props) => props.theme.colors.text.secondary};
  text-align: center;
  height: 2rem;
`;

export const Pagination = styled.div`
  position: absolute;
  bottom: 0;
  margin-bottom: 1rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
