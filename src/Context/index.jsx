import { createContext, useReducer } from "react";
import {initalState, reducer} from '../Reducers/transactions.reducer';

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

