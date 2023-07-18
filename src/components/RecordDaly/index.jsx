import { ItemRecord } from "../ItemRecord";
import { IsToday } from "../../Helpers";
import { useFilterDay } from "../../Hooks/useFilterDay";

function RecordDaly({ records, month }) {
  const { groupedData } = useFilterDay(records);

  return (
    <>
      <section class="d-flex flex-column col-10 align-items-center m-auto h-75 custom-carousel">
        {Object.keys(groupedData).map((date) => (
          <div
            class="d-flex flex-column bg-light col-11 m-1 p-2 align-items-center shadow-sm rounded-2"
            key={date}
          >
            <div className="d-flex px-3 col-12 fw-bold justify-content-start">
              <span>{date}</span>
            </div>

            {groupedData[date].map((record, index) => (
              <ItemRecord
                key={`${date}_${index}`} // Agregar un sufijo único al key
                id={record.id}
                date={record.date}
                concept={record.concept}
                amount={record.amount}
                type={record.typeOperation}
                count={record.details.count}
                bank={record.details.bank}
              />
            ))}
          </div>
        ))}
      </section>
    </>
  );
}

export { RecordDaly };
