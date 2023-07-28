import { Collapse } from "bootstrap";
import { Modal } from "../Modal";

function BoxAcordeon({ children, text, idCollapse }) {

  return (
    <div class="d-col-flex col-12 gap-1">
      <button
        class="fs-7 border-0 w-100"
        type="button"
        data-bs-toggle="collapse"
        aria-expanded="false"
        data-bs-target={`#${idCollapse}`}
      >
        {text}{" "}
        <i
          class={`${
            children
              ? "fa-solid fa-chevron-down iconUp"
              : "fa-solid fa-chevron-down"
          }`}
        ></i>
      </button>

      <div className="collapse" id={idCollapse}>
        <div class="card card-body">
          {children}
        </div>
      </div>
    </div>
  );
}

export { BoxAcordeon };