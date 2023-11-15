import { useState } from "react";

import { useDispatch } from "react-redux";

import { doDeposit, doWithdraw } from "../../features/wallet/wallet-slice";

import { Transaction } from "../../models/Transaction";

type setInputsType = Omit<Transaction, "id">;

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

    try {
      const transactionData: Transaction = {
        id: Math.floor(Math.random() * 1000000),
        value: +inputs.value,
        type: inputs.type,
        description: inputs.description,
      };

      const validateData = (data: Transaction) => {
        if (data.value <= 0) throw new Error("VSF val");
        if (data.type.length <= 0) throw new Error("VSF type");
        if (data.description.length <= 0) throw new Error("VSF desc");
      };

      validateData(transactionData);

      if (transactionData.type === "deposit")
        return dispatch(doDeposit(transactionData));

      if (transactionData.type === "withdraw")
        return dispatch(doWithdraw(transactionData));
    } catch (error) {
      console.log(error);
    }
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

        <button type="submit">Adicionar</button>
      </form>
    </section>
  );
};
