import { ItemRecord } from "../ItemRecord";
import { IsToday } from "../../Helpers";
import { useFilterDay } from "../../Hooks/useFilterDay";

function RecordDaly({ records , loading, error}) {
  
  const { groupedData } = useFilterDay(records);

  return (
    <>

      {loading && !error && (
        <section class="d-flex flex-column col-10 align-items-center m-auto h-75 custom-carousel">
          <strong>...Loading</strong>
        </section>
      )}

      {!loading && !error && !Object.keys(groupedData).length > 0 &&(
        <section class="d-flex flex-column col-10 align-items-center m-auto h-75 custom-carousel">
          <strong>Sin movimientos agregados en este mes</strong>
        </section>
      )}

      {!loading && !error && (
        <section class="d-flex flex-column col-10 align-items-center m-auto custom-carousel">
          {Object.keys(groupedData).map((date) => (
            <div
              class="d-flex flex-column col-11 m-1 p-2 align-items-center"
              key={date}
            >
              <div className="d-flex px-3 col-12 fw-bold justify-content-start">
                <span>{`${IsToday(date)}`}</span>
              </div>

              {groupedData[date].map((record, index) => (
                <ItemRecord
                  key={`${date}_${index}`}
                  id={record.id}
                  date={record.date}
                  concept={record.concept}
                  amount={record.amount}
                  type={record.typeOperation}
                  count={record.details.acount}
                  bank={record.details.bank}
                />
              ))}
            </div>
          ))}
        </section>
      )}

      
    </>
  );
}

export { RecordDaly };
