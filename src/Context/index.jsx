import { createContext, useReducer, useEffect } from "react";
import {initalState, reducer} from '../Reducers/transactions.reducer';
import { setMonth, allMonths } from "../Helpers";

const Transaccions = createContext();

function TransacctionsProvider({children}) {
    
    const [state, dispatch] = useReducer(reducer, initalState);

    return ( 
        <Transaccions.Provider value={[state, dispatch]}>
            {children}
        </Transaccions.Provider>
     );
}

export {TransacctionsProvider, Transaccions};

