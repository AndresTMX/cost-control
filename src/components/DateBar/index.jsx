import { useState, useEffect } from "react";
import { formatDate, setMonth, allMonths as MonthsUS } from "../../Helpers";
import { Year, Month } from "../../Reducers/transactions.reducer";

function DateBar({state, dispatch}) {
  
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

  const [selectedMonth, setSelectedMonth] = useState();

  const moveScroll = (month) => {
    const monthPosition = document.getElementById(month)
    monthPosition.scrollIntoView({ behavior: 'smooth', inline: 'center' });
  }
  
  const handleMonthSelect = (month) => {
    setSelectedMonth(month);
    const indexMonth = allMonths.indexOf(month)
    const newDate = new Date(Year, indexMonth)
    const Month = newDate.toLocaleString(undefined, { month: '2-digit' });
    const newState = `${Year}-${Month}`
    setMonth(dispatch , newState)
    moveScroll(month)
  };

  useEffect(() => {
    const currentScroll =  new Date(Month)
    const currentMonth =  formatDate(currentScroll).split("-", 3)[1]
    const positionCurrent = MonthsUS.indexOf(currentMonth)
    moveScroll(allMonths[positionCurrent])
  },[])

  return (
    <div class='d-flex col-12 color-primary justify-content-center rounded-2 p-2'>
    <div class="custom-carousel-container">
      <div id="myScroll" class="custom-carousel d-flex">
        {allMonths.map((month) => (
          <div id={month}
            key={month}
            class={`month-item p-2 fs-6 fw-lighter  ${month === selectedMonth ? "fw-bolder" : "fw-light"}`}>
            <span onClick={() => handleMonthSelect(month)}>
              {month}
            </span>
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


