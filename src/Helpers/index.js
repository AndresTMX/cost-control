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

export function formatDate(dateString) {

    let date
    
    if(!dateString){
        date = new Date();  
    }else{
        date = new Date(dateString);
    }

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const dayNum = parseInt(day)
    return `${year}-${month}-${dayNum + 1}`
    
}

export function IsToday(dateString){

    const dateCurrent = formatDate()

    const dateTransaction = formatDate(dateString)

    const dayTransaction = dateTransaction;

    const dayCurrent = dateCurrent.split('-', 3).slice(2-3);

    // console.log(`Hoy - ${dateCurrent.split('-', 3).splice(2)} `)

    if(dayTransaction === dayCurrent){
        console.log( `Hoy ${dateCurrent.split(3,'-').splice(2)}`)
    }

    // if(dayTransaction === dayCurrent - 1 ){
    //     console.log( `Ayer ${dateCurrent.split(3,'-').splice(2)}`)
    // }

    return dayTransaction

}

