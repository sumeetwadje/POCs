import React, { useEffect } from 'react'

const FetchData = () => {

    useEffect(() => {
        const fetDataFromApi = async () => {
            const api = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await api.json();
            console.log(data)
        }
        fetDataFromApi();
    }, [])


    return (
        <div>FetchData</div>
    )
}

export default FetchData