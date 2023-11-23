import styled from "styled-components";

export const Wrapper = styled.section`
  padding-inline: 1rem;
  padding-block: 1.5rem;

  @media (max-width: 48rem) {
    padding-top: 0;
  }
`;

export const Table = styled.table`
  width: 100%;
  background-color: ${(props) => props.theme.colors.background.primary};
  box-shadow: ${(props) => props.theme.colors.boxShadow};
  border-radius: 0.5rem;
  padding: 1rem;

  @media (max-width: 48rem) {
    padding-bottom: 0;

    &::before {
      display: flex;
      align-items: center;
      justify-content: center;
      content: "Transações";
      text-align: center;
      font-weight: 700;
      text-transform: uppercase;
      margin-bottom: 0.5rem;
      padding: 0.75rem;
      padding-top: 0;
      border-bottom: 0.125rem solid
        ${(props) => props.theme.colors.text.secondary};
    }
  }
`;

export const TableHead = styled.thead`
  tr {
    border-bottom: 0.125rem solid
      ${(props) => props.theme.colors.text.secondary};
  }

  @media (max-width: 48rem) {
    display: none;
  }
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  width: 100%;
  border-bottom: 0.0625rem solid ${(props) => props.theme.colors.text.secondary};

  .tdNoTransactions {
    width: 100%;
    padding-block: 1rem;
  }

  @media (max-width: 48rem) {
    margin-bottom: 1rem;
    flex-direction: column;
    gap: 0;

    .tdNoTransactions {
      padding-top: 0.5rem;
    }
  }

  @media (max-width: 20rem) {
    .tdNoTransactions {
      font-size: 0.85rem;
    }
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
  padding: 0.5rem;
  text-align: center;

  @media (max-width: 48rem) {
    width: 100%;
    padding: 0.25rem;

    &:nth-child(1) {
      &::before {
        ${(props) =>
          !props.className &&
          `
            content: "Valor ";
            font-size: 0.75rem;
            opacity: 0.5;
        `}
      }
    }

    &:nth-child(2) {
      &::before {
        content: "Tipo ";
        font-size: 0.75rem;
        opacity: 0.5;
      }
    }

    &:nth-child(3) {
      word-wrap: break-word;
      word-break: break-all;
      &::before {
        content: "Descrição ";
        font-size: 0.75rem;
        opacity: 0.5;
      }
    }

    &:nth-child(4) {
      padding-bottom: 1rem;
    }
  }
`;
