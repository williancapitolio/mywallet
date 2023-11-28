import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  max-width: 64rem;
  /* margin: 0 1rem; */
  position: relative;
  padding-top: 5.5rem;

  @media (max-width: 48rem) {
    padding-top: 0;
  }
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

  @media (max-width: 48rem) {
    flex-direction: column;
    position: relative;
    gap: 1rem;
  }
`;
