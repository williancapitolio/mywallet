import styled from "styled-components";

export const Wrapper = styled.section`
  padding-inline: 1rem;
  position: relative;
  padding-block: 1.5rem;
`;

export const Table = styled.table`
  /* display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between; */
  width: 100%;
  background-color: ${(props) => props.theme.colors.background.primary};
  box-shadow: ${(props) => props.theme.colors.boxShadow};
  border-radius: 0.5rem;
  padding: 1rem;
`;

export const TableRow = styled.tr`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  width: 100%;
  border-bottom: 0.0625rem solid ${(props) => props.theme.colors.text.secondary};

  &:first-child {
    border-bottom: 0.125rem solid
      ${(props) => props.theme.colors.text.secondary};
  }
`;

export const TableHeader = styled.th`
  width: 25%;
  padding: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
`;

export const TableData = styled.td`
  width: 25%;
  padding: 0.75rem 0;
  text-align: center;
`;
