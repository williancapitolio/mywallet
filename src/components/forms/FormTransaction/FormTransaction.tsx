import { useManageFormTransaction } from "../../../hooks/use-manage-form-transaction";

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
          <S.Label htmlFor="type">Tipo de transação</S.Label>
          <S.Select
            name="type"
            id="type"
            onChange={handleChange}
            value={inputs.type}
          >
            <S.Option value="" disabled selected>Selecione um opção</S.Option>
            <S.Option value="deposit">Depósito</S.Option>
            <S.Option value="withdraw">Saque</S.Option>
          </S.Select>
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

        <S.Submit type="submit">Adicionar</S.Submit>
      </S.Form>
      {error && <S.ErrorMsg>{error}</S.ErrorMsg>}
    </S.Wrapper>
  );
};
