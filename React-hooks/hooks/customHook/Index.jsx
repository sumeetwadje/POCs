import React from 'react'
import useFetch from './useFetch'

const Index = () => {
    const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");
    if (loading) return <p>Loading................</p>
    if (error) return <p>Error occured : {error}</p>

    return (
        <div>
            <ul>
                {data.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
        </div>
    )
}

export default Index