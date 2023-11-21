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

export const Radios = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const RadioContainer = styled.div`
  position: relative;
  height: 3rem;
  width: 6rem;
  margin: 0.5rem;
`;

export const RadioInput = styled.input`
  cursor: pointer;
  position: absolute;
  height: 100%;
  width: 100%;
  margin: 0;
  cursor: pointer;
  z-index: 2;
  opacity: 0;

  &:checked + .radio-tile {
    background-color: ${(props) => props.theme.colors.button.ok};
  }

  &:hover + .radio-tile {
    opacity: 0.85;
  }
`;

export const RadioTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  border: 0.125rem solid ${(props) => props.theme.colors.text.primary};
  border-radius: 0.5rem;
`;

export const RadioLabel = styled.label`
  cursor: pointer;
  color: ${(props) => props.theme.colors.text.primary};
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
`;

export const ErrorMsg = styled.span``;
