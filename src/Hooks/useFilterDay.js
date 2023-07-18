import { useState, useEffect } from "react";
import { formatDate } from "../Helpers";

// Hook para agrupar objetos por día
function useFilterDay(arrayRecords) {
    
  const [groupedData, setGroupedData] = useState({});

  useEffect(() => {
    const groupedData = arrayRecords.reduce((result, obj) => {      
      const formattedDate = formatDate(obj.date);
      
      if (!result[formattedDate]) {
        result[formattedDate] = [];
      }
      result[formattedDate].push(obj);
      return result;
    }, {});
    setGroupedData(groupedData);
  }, [arrayRecords]);

  return {groupedData};
}

export { useFilterDay };
