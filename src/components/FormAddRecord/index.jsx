import { useState } from "react";
import { toggleModal } from "../../Helpers";
import { CustomButton } from "../CustomButton";

function FormAddRecord({ dispatch }) {
    
  const [formData, setFormData] = useState({
    transactionName: "",
    amount: "",
    transactionType: "",
    accountType: "",
    bank: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const transactionName = form.querySelector("#transactionName").value;
    const amount = form.querySelector("#amount").value;
    const transactionType = form.querySelector("#transactionType").value;
    const accountType = form.querySelector("#accountType").value;
    const bank = form.querySelector("#bank").value;

    setFormData({
      transactionName,
      amount,
      transactionType,
      accountType,
      bank,
    });

    toggleModal(dispatch, false);
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
          <label for="transactionName" class="form-label">
            Transaccion
          </label>
          <input
            type="text"
            class="form-control"
            id="transactionName"
            required
          />
          <div id="emailHelp" class="form-text">
            Ingresa un nombre para identificar tu transaccion.
          </div>
        </div>

        <div class="mb-3">
          <label for="amount" class="form-label">
            Monto
          </label>
          <input type="text" class="form-control" id="amount" required />
          <div id="emailHelp" class="form-text">
            Ingresa el monto de tu transaccion.
          </div>
        </div>

        <div class="mb-3">
          <label for="transactionType" class="form-label">
            Transaccion
          </label>
          <select
            class="form-select  form-select-sm"
            id="transactionType"
            required
          >
            <option value="">Tipo de transaccion</option>
            <option value="ingreso">Ingreso</option>
            <option value="egreso">Egreso</option>
          </select>
        </div>

        <div class="mb-3">
          <label for="accountType" class="form-label">
            Cuenta
          </label>
          <select class="form-select  form-select-sm" id="accountType" required>
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
