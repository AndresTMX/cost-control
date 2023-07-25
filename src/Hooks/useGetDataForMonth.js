import { useState, useEffect } from "react";
import {fetchTransactionsByMonth} from "../services/";
import { updateRecords } from "../Helpers";

function useGetDataForMonth(dispatch, state) {

    const {month} = state
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {

        setLoading(true)
        setError(false)
        
        setTimeout(() => {
        const fetch = async() => {
            try {
                    const response = await fetchTransactionsByMonth(month);
                    updateRecords(dispatch, response)
                    setLoading(false);
                } catch (error) {
                    setLoading(false);
                    setError(error);
                }
            } 
            fetch();
        }, 500);           
        
    }, [month])

    return {loading, error}
}

export {useGetDataForMonth};