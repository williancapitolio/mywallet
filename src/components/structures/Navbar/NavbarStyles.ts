import styled from "styled-components";

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Title = styled.h1`
  font-weight: 900;
  font-size: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  margin: 1rem 0 0 1rem;
  z-index: 1;

  @media (max-width: 20rem) {
    font-size: 1.75rem;
  }
`;
