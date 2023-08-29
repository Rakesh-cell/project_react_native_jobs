import { useState, useEffect } from "react";
import axios from "axios";


const rapidApiKey = RAPID_API_KEY = '5098ca217dmsh79cfe262eb44006p15db97jsnd2159c4130d9'

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: { ...query },
        headers: {
            'X-RapidAPI-Key': rapidApiKey,
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    };
    const fetchData = async () => {
        setIsLoading(true)
        try {
            const response = await axios.request(options)
            setData(response.data.data);
            setIsLoading(false);

        } catch (error) {
            setError(error);
            alert("There was an error  while fetching")
        }
        finally {
            setIsLoading(false);
        }
    }
    useEffect(() => {
        fetchData();
    }, [])

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }
    return { data, isLoading, error, refetch };
}
export default useFetch