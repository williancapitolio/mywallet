import { useManageFormTransaction } from "../../../hooks/use-manage-form-transaction";

import { ToastNotification } from "../../structures/ToastNotification";

import { Submit } from "../../buttons/Submit";

import { BsXCircle } from "react-icons/bs";

import * as S from "./FormTransactionStyles";

export const FormTransaction = () => {
  const {
    handleSubmit,
    handleChange,
    handleError,
    inputs,
    error,
    radioDepositRef,
    radioWithdrawRef,
  } = useManageFormTransaction();

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
            value={inputs.value}
          />
        </S.Field>

        <S.Field>
          <S.Label htmlFor="type">Tipo</S.Label>
          <S.Radios>
            <S.RadioContainer>
              <S.RadioInput
                type="radio"
                name="type"
                id="deposit"
                value="deposit"
                onChange={handleChange}
                ref={radioDepositRef as React.RefObject<HTMLInputElement>}
                defaultChecked={false}
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
                ref={radioWithdrawRef as React.RefObject<HTMLInputElement>}
                defaultChecked={false}
              />

              <S.RadioTitle className="radio-tile">
                <S.RadioLabel htmlFor="withdraw">Retirada</S.RadioLabel>
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
      {error && (
        <ToastNotification
          icon={<BsXCircle className="btn-icon" />}
          type="Erro!"
          message={error}
          closeToastNotification={handleError}
        />
      )}
    </S.Wrapper>
  );
};
