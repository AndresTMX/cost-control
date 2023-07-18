import { useState, useEffect } from "react";
import {fetchTransactionsByMonth} from "../services/";
function useGetDataForMonth(month) {

    const [dataMonth, setDataMonth] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        
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

    }, [month])

    return {dataMonth, loading, error}
}

export {useGetDataForMonth};