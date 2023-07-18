
const initalState = {
  modal: false,
  month:'Jan',
  income:0,
  expense:0,
  balance:0,
  dataMonth:[]
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
  setIncome: "SET_INCOME",
  setExpense:"SET_EXPENSE",
  setBalance:"SET_BALANCE",
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
  [actionTypes.setIncome]: {
    ...state,
    income: payload,
  },
  [actionTypes.setExpense]: {
    ...state,
    expense: payload,
  },
  [actionTypes.setBalance]: {
    ...state,
    balance: payload,
  },
});

export {initalState, reducer, actionTypes}