import { actionTypes } from "../Reducers/transactions.reducer"

export const allMonths = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

export const toggleModal = (dispatch, payload) => {
    dispatch({type:actionTypes.setModal, payload: payload})
}

export const setMonth = (dispatch, payload) => {  
    dispatch({ type: actionTypes.setMonth, payload: payload });
};

export function transformDateLocal (date) {
    return date.toLocaleDateString("en-EN", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

}

export function formatDate(dateString) {
  const date = new Date(dateString);
  const tranformDate = transformDateLocal(date); 
  const year =  tranformDate.split(" ")[2]
  const month = tranformDate.split(" ")[0].slice(0,3);
  const day =  tranformDate.split(" ")[1];  
  return `${year}-${month}-${day}`
  
}

export function IsToday(dateString){

    const dateCurrent = new Date();
    const dateTransaction = new Date(dateString);
    
    const dayTransaction = transformDateLocal(dateTransaction);
    const dayCurrent = transformDateLocal(dateCurrent);
    
    if(dayTransaction == dayCurrent){
      return `Hoy ${dayTransaction.split(",")[0].split(" ")[1]} ${formatDate(dayTransaction).split("-")[1]}`
    }

    return `${dayTransaction.split(",")[0].split(" ")[1]} ${formatDate(dayTransaction).split("-")[1]}`

}

export function updateRecords(dispatch, records, payload){

  if(payload){
 
    const newState = records.length? 
    [...records, payload] : [payload];
  
    dispatch({type:actionTypes.setUpdate, payload: newState});

  }

  dispatch({type:actionTypes.setUpdate, payload: records});


}


