import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url)

                if (!response.ok) throw new error
                    ("Failed to fetch data")

                const result = await response.json();
                setData(result);
                setError(null)
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }
        fetchData();
    }, [url])

    return { data, loading, error }

}

export default useFetch