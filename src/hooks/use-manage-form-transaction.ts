import { useEffect, useRef, useState } from "react";

import { useDispatch } from "react-redux";

import { doDeposit, doWithdraw } from "../features/wallet/wallet-slice";

import { selectBalance } from "../features/wallet/wallet-selectors";

import { useAppSelector } from "../hooks/use-app-selector";

import { Transaction } from "../models/Transaction";

type setInputsType = Omit<Transaction, "id">;

export const useManageFormTransaction = () => {
  const balance = useAppSelector(selectBalance);

  const dispatch = useDispatch();

  const defaultInputs: setInputsType = {
    value: 0,
    type: "",
    description: "",
  };

  const [inputs, setInputs] = useState<setInputsType>(defaultInputs);

  const [error, setError] = useState("");

  const radioDepositRef = useRef<HTMLInputElement>();
  const radioWithdrawRef = useRef<HTMLInputElement>();

  const handleChange = (ev: React.SyntheticEvent) => {
    setInputs((prev: setInputsType) => ({
      ...prev,
      [(ev.target as HTMLInputElement).name]: (ev.target as HTMLInputElement)
        .value,
    }));
  };

  const handleError = () => {
    setError("");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleError();
    }, 3000);

    return () => clearTimeout(timer);
  }, [error]);

  const handleSubmit = (ev: React.SyntheticEvent) => {
    ev.preventDefault();

    try {
      const transactionData: Transaction = {
        id: Math.floor(Math.random() * 1000000),
        value: +inputs.value,
        type: inputs.type,
        description: inputs.description,
      };

      const validateData = (data: Transaction) => {
        if (typeof data.value !== "number")
          throw new Error("Valor deve ser um número!");

        if (data.value <= 0)
          throw new Error("Valor não pode ser menor ou igual a R$ 0,00!");

        if (data.value > 100000)
          throw new Error("Valor não pode ser maior que R$ 100000,00!");

        if (!data.type)
          throw new Error("Necessário escolher o tipo de transação!");

        if (balance < transactionData.value && data.type === "withdraw")
          throw new Error("Saldo insuficiente!");

        if (!data.description)
          throw new Error("Campo descrição é obrigatório!");

        if (data.description.length < 3)
          throw new Error("Campo descrição no mínimo 3 caracteres!");

        if (data.description.length > 50)
          throw new Error("Campo descrição no máximo 50 caracteres!");
      };

      validateData(transactionData);

      if (transactionData.type === "deposit")
        dispatch(doDeposit(transactionData));

      if (transactionData.type === "withdraw")
        dispatch(doWithdraw(transactionData));

      handleError();
      setInputs(defaultInputs);

      radioDepositRef.current!.checked = false;
      radioWithdrawRef.current!.checked = false;
    } catch (err) {
      if (err instanceof Error) setError(err.message);
      else setError("Algo deu errado!");
    }
  };

  return {
    handleSubmit,
    handleChange,
    handleError,
    inputs,
    error,
    radioDepositRef,
    radioWithdrawRef,
  };
};
