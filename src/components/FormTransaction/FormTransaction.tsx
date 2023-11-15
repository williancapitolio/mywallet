import { useManageFormTransaction } from "../../hooks/use-manage-form-transaction";

export const FormTransaction = () => {
  const { handleSubmit, handleChange, inputs, error } =
    useManageFormTransaction();
    
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
