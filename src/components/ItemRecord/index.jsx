import { useState } from "react";

function ItemRecord({ id, date, concept, amount, type, count, bank }) {
  const [details, setDetails] = useState(false);
  const icon = type === "ingreso" ? true : false;
  const viewDetails = () => {
    setDetails(!details);
  };

  return (
    <div className="d-flex flex-column col-12 bg-light my-1 shadow-sm rounded-2 align-items-center">
      <div class="d-flex flex-row justify-content-between col-12 m-1 p-2 rounded-2 ">
        <div class="d-flex col-6 fw-semibold flex-row align-items-center">
          <span
            class={`p-3 mx-2 ${icon ? "icon-positive" : "icon-negative"}`}
          ></span>
          <span>{concept}</span>
        </div>

        <div class="d-flex col-6 align-items-center justify-content-end">
          <button
            onClick={viewDetails}
            class={`d-flex align-items-center bg-light justify-content-center border-0 fw-bold`}
          >
            <span
              class={`fs-6 ${
                icon ? "text-positive" : "text-negative"
              } ${amount}`}
            >{`${icon ? "+ $" : "- $"}  ${amount}`}</span>
            <i
              class={`col-4 px-3 fs-6 ${
                details
                  ? "fa-solid fa-chevron-down iconUp"
                  : "fa-solid fa-chevron-down"
              }`}
            ></i>
          </button>
        </div>
      </div>
      
      { details && (
          <div
        class={`d-flex flex-column justify-content-between col-12 bg-light p-2 bg-danger ${
          details ? "visible" : "content"
        }`}
      >
        <div>
          <strong>Tipo de transaccion:</strong>
          <span> {type}</span>
        </div>

        <div>
          <strong>Cuenta:</strong>
          <span> {count}</span>
        </div>

        <div>
          <strong>Banco:</strong>
          <span> {bank}</span>
        </div>
      </div>
        )
      }
    </div>
  );
}

export { ItemRecord };
