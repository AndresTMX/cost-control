import { useState, useEffect } from "react";
import {fetchTransactionsByMonth} from "../services/";
import { updateRecords } from "../Helpers";

function useGetDataForMonth(dispatch, state) {

    const {month, updates} = state
    const [dataMonth, setDataMonth] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {

        setLoading(true)
        setError(false)
        
        setTimeout(() => {
        const fetch = async() => {
            try {
                    const response = await fetchTransactionsByMonth(month);
                    setDataMonth(response);
                    setLoading(false);
                } catch (error) {
                    setLoading(false);
                    setError(error);
                }
            } 
            fetch();
        }, 500);           
        updateRecords(dispatch, dataMonth, false)
        
    }, [month, updates])

    return {dataMonth, loading, error}
}

export {useGetDataForMonth};