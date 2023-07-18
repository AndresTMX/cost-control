import { ItemRecord } from "../ItemRecord";
import { IsToday } from "../../Helpers";
import { useFilterDay } from "../../Hooks/useFilterDay";

function RecordDaly({ records, month }) {
  const { groupedData, dateFormat } = useFilterDay(records);
  IsToday(dateFormat);

  return (
    <>
      <section class="d-flex flex-column col-10 align-items-center m-auto h-75 custom-carousel">
         <section class="d-flex flex-column bg-light col-11 m-1 p-2 align-items-center shadow-sm rounded-2">
          <div class="d-flex px-3 col-12 fw-bold justify-content-start">
            <span>{dateFormat}</span>
          </div>
         {Object.keys(groupedData).map((date) =>
          groupedData[date].map((record) => (
            <ItemRecord
              key={record.id}
              id={record.id}
              date={record.date}
              concept={record.concept}
              amount={record.amount}
              type={record.typeOperation}
              count={record.details.count}
              bank={record.details.bank}
            />
          ))
        )}
         </section>
      </section>
    </>
  );
}

export { RecordDaly };
