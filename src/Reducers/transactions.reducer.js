import { formatDate } from "../Helpers";

const date = new Date()
const format = formatDate(date)
export const Month = date.toLocaleString(undefined, { month: '2-digit' });
export const Year = format.split("-", 3)[0]
export const currentDate = `${Year}-${Month}`

const initalState = {
  modal: false,
  month:currentDate,
  dataMonth:[],
};

const reducer = (state, action) => {
  if (reducerStore(state)[action.type]) {
    return reducerStore(state, action.payload)[action.type];
  } else {
    return state;
  }
};

const actionTypes = {
  setModal: "SET_MODAL",
  setMonth:"SET_MONTH",
  setUpdate: "SET_UPDATE",
};

const reducerStore = (state, payload) => ({
  [actionTypes.setModal]: {
    ...state,
    modal: payload,
  },
  [actionTypes.setMonth]: {
    ...state,
    month: payload,
  },
  [actionTypes.setUpdate]: {
    ...state,
    dataMonth: payload,
  }
});

export {initalState, reducer, actionTypes}