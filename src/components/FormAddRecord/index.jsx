import { useState } from "react";
import { toggleModal, updateRecords } from "../../Helpers";
import { CustomButton } from "../CustomButton";
import { postTransaction } from "../../services";
import { v4 as uuidv4 } from 'uuid';

function FormAddRecord({ state, dispatch }) {

  const {updates} = state
    
  const [formData, setFormData] = useState({
    id:"",
    date:"",
    concept: "",
    amount: 0,
    typeOperation: "",
    details: {
      acount: "",
      bank: ""
  }
  });

  const getFormData = (form) => {

    const id = uuidv4();
    const date = new Date();
    const concept= form.querySelector("#concept").value;
    const amount = form.querySelector("#amount").value;
    const typeOperation = form.querySelector("#typeOperation").value;
    const acount = form.querySelector("#acount").value;
    const bank = form.querySelector("#bank").value;

    setFormData({
      id,
      date,
      concept,
      amount,
      typeOperation,
        acount,
        bank
    });

    return {
      id,
      date,
      concept,
      amount,
      typeOperation,
      details: {
        acount,
        bank,
      }

  }
  };

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const formData = getFormData(form);

    try {
      const response = await postTransaction(formData)
      updateRecords(dispatch, updates, formData )
      toggleModal(dispatch, false)
      return response;
    } catch (error) {
      const errorMessage = `Error create transaction : ${response.status} ${response.statusText}`;
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
  };

  return (
    <>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
        class="p-3 d-flex flex-column gap-2"
      >
        <div class="mb-3">
          <label for="concept" class="form-label">
            Transaccion
          </label>
          <input
            type="text"
            class="form-control"
            id="concept"
            required
          />
          <div class="form-text">
            Ingresa un nombre para identificar tu transaccion.
          </div>
        </div>

        <div class="mb-3">
          <label for="amount" class="form-label">
            Monto
          </label>
          <input type="text" class="form-control" id="amount" required />
          <div class="form-text">
            Ingresa el monto de tu transaccion.
          </div>
        </div>

        <div class="mb-3">
          <label for="typeOperation" class="form-label">
            Transaccion
          </label>
          <select
            class="form-select  form-select-sm"
            id="typeOperation"
            required
          >
            <option value="">Tipo de transaccion</option>
            <option value="ingreso">Ingreso</option>
            <option value="retiro">Retiro</option>
          </select>
        </div>

        <div class="mb-3">
          <label for="acount" class="form-label">
            Cuenta
          </label>
          <select class="form-select  form-select-sm" id="acount" required>
            <option value="">Tipo de cuenta</option>
            <option value="debito">Debito</option>
            <option value="credito">Credito</option>
          </select>
        </div>

        <div class="mb-3">
          <label for="bank" class="form-label">
            Banco
          </label>
          <select class="form-select  form-select-sm" id="bank" required>
            <option value="">Banco</option>
            <option value="bancomer">Bancomer</option>
            <option value="santander">Santander</option>
            <option value="banamex">Banamex</option>
            <option value="azteca">Azteca</option>
          </select>
        </div>

        <button type="submit" class="button">
          Agregar
        </button>
        <CustomButton
          text="Close"
          typeButton="modal"
          action={() => toggleModal(dispatch, false)}
        />
      </form>
    </>
  );
}

export { FormAddRecord };
