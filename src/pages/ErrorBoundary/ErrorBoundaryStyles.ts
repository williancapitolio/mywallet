import styled from "styled-components";

export const ErrorBoundary = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.background.top};
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 64rem;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 64rem;
  padding: 0.5rem 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 2rem;
  margin-block: 3rem;
`;

export const Status = styled.span`
  font-size: 3rem;
  font-weight: 700;
`;

export const Message = styled.span`
  font-size: 1.125rem;
`;
