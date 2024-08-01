import { useState, useEffect } from "react";
import axios from "axios";
import { RAPID_API_KEY } from "../Private";



const rapidApiKey=`${RAPID_API_KEY}`

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null);
    console.log('fetch')
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
            console.log(response.data);
            setIsLoading(false);

        } catch (error) {
            setError(error);
            console.warn(error);
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