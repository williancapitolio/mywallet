import styled from "styled-components";

export const Wrapper = styled.section`
  padding-inline: 1rem;
  position: relative;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.background.primary};
  box-shadow: ${(props) => props.theme.colors.boxShadow};
  border-radius: 0.5rem;
  padding: 1rem;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  gap: 0.5rem;
`;

export const Label = styled.label`
  font-size: 0.75rem;
  cursor: pointer;
`;

export const Input = styled.input`
  background-color: ${(props) => props.theme.colors.background.primary};
  padding: 0.5rem;
  border: 0.125rem solid ${(props) => props.theme.colors.text.primary};
  border-radius: 0.25rem;

  &:focus {
    outline: none;
    border: 0.125rem solid ${(props) => props.theme.colors.button.ok};
  }
`;

export const Select = styled.select`
  background-color: ${(props) => props.theme.colors.background.primary};
  padding: 0.5rem;
  border: 0.125rem solid ${(props) => props.theme.colors.text.primary};
  border-radius: 0.25rem;

  &:focus {
    outline: none;
    border: 0.125rem solid ${(props) => props.theme.colors.button.ok};
  }
`;

export const Option = styled.option`
  background-color: ${(props) => props.theme.colors.background.primary};
  padding: 0.5rem;
`;

export const ErrorMsg = styled.span``;
