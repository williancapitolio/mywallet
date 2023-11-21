import { useManageFormTransaction } from "../../../hooks/use-manage-form-transaction";
import { Submit } from "../../buttons/Submit";

import * as S from "./FormTransactionStyles";

export const FormTransaction = () => {
  const { handleSubmit, handleChange, inputs, error } =
    useManageFormTransaction();

  return (
    <S.Wrapper>
      <S.Form onSubmit={handleSubmit}>
        <S.Field>
          <S.Label htmlFor="value">Valor</S.Label>
          <S.Input
            type="number"
            name="value"
            id="value"
            onChange={handleChange}
            autoComplete="off"
            step={10}
            value={inputs.value}
          />
        </S.Field>

        <S.Field>
          <S.Radios>
            <S.RadioContainer>
              <S.RadioInput
                type="radio"
                name="type"
                id="deposit"
                value="deposit"
                onChange={handleChange}
              />

              <S.RadioTitle className="radio-tile">
                <S.RadioLabel htmlFor="deposit">Depósito</S.RadioLabel>
              </S.RadioTitle>
            </S.RadioContainer>

            <S.RadioContainer>
              <S.RadioInput
                type="radio"
                name="type"
                id="withdraw"
                value="withdraw"
                onChange={handleChange}
              />

              <S.RadioTitle className="radio-tile">
                <S.RadioLabel htmlFor="withdraw">Saque</S.RadioLabel>
              </S.RadioTitle>
            </S.RadioContainer>
          </S.Radios>
        </S.Field>

        <S.Field>
          <S.Label htmlFor="description">Descrição</S.Label>
          <S.Input
            type="text"
            name="description"
            id="description"
            onChange={handleChange}
            autoComplete="off"
            value={inputs.description}
          />
        </S.Field>

        <Submit text="Adicionar" />
      </S.Form>
      {error && <S.ErrorMsg>{error}</S.ErrorMsg>}
    </S.Wrapper>
  );
};
