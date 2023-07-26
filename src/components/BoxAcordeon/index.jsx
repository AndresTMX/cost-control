import { useState } from "react";
import { Collapse } from "bootstrap";
import { Modal } from "../Modal";

function BoxAcordeon({ children, text, idCollapse }) {

  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div>

        <div class="row">

            <div class="col accordion-item">

                <button
                // onClick={() => setIsExpanded(!isExpanded)}
                  class="col-12 border-0 p-1 text-muted text-center align-items-center w-100 fs-7"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#${idCollapse}`}
                  aria-expanded={isExpanded}
                  aria-controls={idCollapse}
                >
                  {text} <i class={`${isExpanded ? "fa-solid fa-chevron-down iconUp" : "fa-solid fa-chevron-down"}`}></i>
                </button>
            

              <div
                id={idCollapse}
                class={`col-12 accordion-collapse collapse ${isExpanded ? "show" : ""}`}
                data-bs-parent="#accordionExample"
              >
                 <Modal>
                  {children}
                 </Modal>
              </div>

            </div>

        </div>
    </div>
  );
}

export { BoxAcordeon };