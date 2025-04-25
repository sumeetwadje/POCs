import React from 'react'
import MoneyContext from '../MoneyContext';
import { useContext } from 'react';

const Block = () => {
    console.log("useContext-------->", useContext(MoneyContext))
    const data = useContext(MoneyContext);

    return (
        <div>
            <h1>This is Block Component {data.money}</h1>
            <h1>Counter: {data.counter}</h1>
            <button onClick={() => data.setCounter(data.counter + 1)}>Incremennt</button>
        </div>

    )
}

export default Block