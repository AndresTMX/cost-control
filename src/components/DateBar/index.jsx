import { useState } from "react";
import { setMonth } from "../../Helpers";

function DateBar({dispatch}) {

  const [selectedMonth, setSelectedMonth] = useState("Enero");

  const allMonths = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const handleMonthSelect = (month) => {
    setSelectedMonth(month);
    setMonth(dispatch , allMonths.indexOf(month))
  };

  return (
    <div class='d-flex col-12 color-primary justify-content-center rounded-2 p-2'>
    <div class="custom-carousel-container" style={{ overflowX: "hidden" }}>
      <div class="custom-carousel d-flex" >
        {allMonths.map((month) => (
          <div
            key={month}
            class={`month-item p-2 fs-6 fw-lighter  ${month === selectedMonth ? "fw-bolder" : "fw-light"}`}>
            <div onClick={() => handleMonthSelect(month)}>
              {month}
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export { DateBar };












/*
<div class="carousel d-flex slide container-fluid color-primary justify-content-around p-4">
        <div class="carousel-inner bg-danger">
          {months.map((month, index) => (
            <div class="carousel-item active bg-black">
              <a
                class="button bg-light"
                key={index}
                onClick={() => handleMonthSelect(month)}
              >
                {month}
              </a>
            </div>
          ))}
        </div>

        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
        </div>
*/


