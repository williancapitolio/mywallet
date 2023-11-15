import { useState } from "react";

import { useDispatch } from "react-redux";

import { doDeposit, doWithdraw } from "../../features/wallet/wallet-slice";

import { Transaction } from "../../models/Transaction";

type setInputsType = Omit<Transaction, "id">;

export const FormTransaction = () => {
  const dispatch = useDispatch();

  const defaultInputs: setInputsType = {
    value: 0,
    type: "",
    description: "",
  };

  const [inputs, setInputs] = useState<setInputsType>(defaultInputs);

  const [error, setError] = useState("");

  const handleChange = (ev: React.SyntheticEvent) => {
    setInputs((prev: setInputsType) => ({
      ...prev,
      [(ev.target as HTMLInputElement | HTMLSelectElement).name]: (
        ev.target as HTMLInputElement
      ).value,
    }));
  };

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

        /* if (!data.value) throw new Error("Campo valor é obrigatório!"); */

        if (data.value <= 0)
          throw new Error("Valor não pode ser menor que R$ 0,00!");

        if (data.value > 10000)
          throw new Error("Valor não pode ser maior que R$ 10.000,00!");

        if (!data.type)
          throw new Error("Necessário escolher o tipo de transação!");

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

      setError("");
      return setInputs(defaultInputs);
    } catch (err) {
      if (err instanceof Error) setError(err.message);
      else setError("Algo deu errado!");
    }
  };

  return (
    <section>
      <h2>Formulário</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="value">Valor</label>
        <input
          type="number"
          name="value"
          id="value"
          onChange={handleChange}
          placeholder="Valor da transação..."
          autoComplete="off"
          step={10}
          value={inputs.value}
        />

        <label htmlFor="type">Tipo de transação</label>
        <select
          name="type"
          id="type"
          onChange={handleChange}
          value={inputs.type}
        >
          <option value="">Selecione um opção</option>
          <option value="deposit">Depósito</option>
          <option value="withdraw">Saque</option>
        </select>

        <label htmlFor="description">Descrição</label>
        <input
          type="text"
          name="description"
          id="description"
          onChange={handleChange}
          placeholder="Descrição da transação..."
          autoComplete="off"
          value={inputs.description}
        />

        <button type="submit">Adicionar</button>
      </form>
      <div>{error && <span>{error}</span>}</div>
    </section>
  );
};
