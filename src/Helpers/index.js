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
      
    const month = allMonths[payload];
    dispatch({ type: actionTypes.setMonth, payload: month });
};

export function transformDateLocal (date) {
    return date.toLocaleDateString("es-ES", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

}

export function formatDate(dateString) {
  const date = new Date(dateString);
  const tranformDate = transformDateLocal(date);  
  const year =  tranformDate.split(" ")[4];
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day =  tranformDate.split(" ")[0];  
  return `${year}-${month}-${day}`
  
}

export function IsToday(dateString){

    const dateCurrent = new Date();
    const dateTransaction = new Date(dateString);
    
    const dayTransaction = transformDateLocal(dateTransaction);
    const dayCurrent = transformDateLocal(dateCurrent);

    const dayTransactionForce = parseInt(dayTransaction.split(" ")[0]) + 1;

    if(dayTransaction === dayCurrent){
      return `Hoy ${dayTransaction.split(" ")[0]} ${dayTransaction.split(" ")[2]}`
    }

    return `${dayTransactionForce} ${dayTransaction.split(" ")[2]}`

}

