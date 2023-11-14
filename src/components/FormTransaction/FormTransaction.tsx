import { useState } from "react";

import { useDispatch } from "react-redux";

import { doDeposit, doWithdraw } from "../../features/wallet/wallet-slice";

import { Transaction } from "../../models/Transaction";

type setInputsType = Omit<Transaction, "id" | "createdAt">;

export const FormTransaction = () => {
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState<setInputsType>({
    value: 0,
    type: "",
    description: "",
  });

  const handleChange = (ev: React.SyntheticEvent) => {
    ev.preventDefault();
    setInputs((prev: setInputsType) => ({
      ...prev,
      [(ev.target as HTMLInputElement | HTMLSelectElement).name]: (
        ev.target as HTMLInputElement
      ).value,
    }));
  };

  const handleSubmit = (ev: React.SyntheticEvent) => {
    ev.preventDefault();
    const id = Math.floor(Math.random() * 1000000);
    const createdAt = new Date();

    const data: Transaction = {
      id,
      value: +inputs.value,
      type: inputs.type,
      description: inputs.description,
      createdAt,
    };

    if (data.type === "deposit") return dispatch(doDeposit(data));

    if (data.type === "withdraw") return dispatch(doWithdraw(data));

    return;
  };

  return (
    <section>
      <h2>Formulário</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="value">Valor</label>
        <input type="text" name="value" id="value" onChange={handleChange} />

        <select name="type" id="type" onChange={handleChange}>
          <option value="">Tipo de transação</option>
          <option value="deposit">Depósito</option>
          <option value="withdraw">Saque</option>
        </select>

        <label htmlFor="description">Descrição</label>
        <input
          type="text"
          name="description"
          id="description"
          onChange={handleChange}
        />

        <button>Adicionar</button>
      </form>
    </section>
  );
};
