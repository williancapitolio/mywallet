import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.background.top};
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 13.5rem;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 64rem;
  padding: 0.5rem 1rem;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

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
`;

export const Hello = styled.p`
  font-size: 1.5rem;
  padding-bottom: 0.5rem;
  font-weight: 700;
`;

export const Greetings = styled.span`
  font-size: 0.85rem;
`;
