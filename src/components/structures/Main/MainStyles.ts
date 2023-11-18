import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  max-width: 64rem;
  margin: 0 1rem;
  position: relative;
  padding-top: 5.5rem; //temporário
`;

export const ContentCards = styled.section`
  position: absolute;
  top: -4rem;
  width: 100%;
  padding-inline: 1rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;

  .btn-icon {
    font-size: 1.5rem;
  }
`;
