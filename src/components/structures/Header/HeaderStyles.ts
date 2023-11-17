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
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 64rem;
  padding: 0.5rem 1rem;
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
`;

export const Hello = styled.p``;

export const Greetings = styled.span``;
